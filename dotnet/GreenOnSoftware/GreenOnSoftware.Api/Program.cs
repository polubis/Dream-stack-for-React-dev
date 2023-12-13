using AutoMapper;
using FluentValidation.AspNetCore;
using GreenOnSoftware.Api.Middlewares;
using GreenOnSoftware.Api.Startup;
using GreenOnSoftware.Commons.Clock;
using GreenOnSoftware.DataAccess;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Reflection;
using Serilog;
using GreenOnSoftware.Application;
using GreenOnSoftware.Infrastructure;
using GreenOnSoftware.Infrastructure.Security;
using GreenOnSoftware.Infrastructure.SendGrid;
using GreenOnSoftware.Infrastructure.BlobStorage;
using GreenOnSoftware.Application.Configuration;
using GreenOnSoftware.Application.Articles.AddArticleCommand;
using GreenOnSoftware.Api.Filters;
using GreenOnSoftware.Api.Context;
using GreenOnSoftware.Application.Mapper;
using Microsoft.Extensions.Configuration;

var builder = WebApplication.CreateBuilder(args);

Log.Logger = new LoggerConfiguration()
                .ReadFrom.Configuration(builder.Configuration)
                .CreateLogger();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddHttpContextAccessor();

builder.Services.AddMediatR(Assembly.GetEntryAssembly()!, typeof(AddArticle).Assembly);

builder.Services.AddAutoMapper(typeof(ArticlesMapperProfile).Assembly);

builder.Services.AddIdentityContext();

builder.Services.AddDbContext<GreenOnSoftwareDbContext>(options =>
  options.UseSqlServer(builder.Configuration.GetConnectionString("GreenOnSoftware")));

builder.Services.AddAuthentication(builder.Configuration);

builder.Services.AddCors();

builder.Services.AddDistributedMemoryCache();
builder.Services.AddSession(opt => {
    opt.IdleTimeout = TimeSpan.MaxValue;
    opt.Cookie.HttpOnly = true;
    opt.Cookie.IsEssential = true;
});

builder.Services.Configure<SecurityConfiguration>(builder.Configuration.GetSection("Security"));
builder.Services.Configure<SendGridConfiguration>(builder.Configuration.GetSection("SendGrid"));
builder.Services.Configure<BlobStorageConfiguration>(builder.Configuration.GetSection("BlobStorage"));
builder.Services.Configure<ApplicationConfiguration>(builder.Configuration.GetSection("Application"));

builder.Services.AddSingleton<IClock, Clock>();

builder.Services.AddApplication();
builder.Services.AddInfrastructure();


builder.Host.UseSerilog();

builder.Services
    .AddControllers(config => config.Filters.Add<LogAttribute>())
    .ConfigureApiBehaviorOptions(options => {
        options.InvalidModelStateResponseFactory = actionContext =>
        InvalidModelStateResponseFactory.CustomErrorResponse(actionContext);
    })
    .AddFluentValidation(opt => {
        opt.RegisterValidatorsFromAssembly(typeof(AddArticle).Assembly);
    });


var app = builder.Build();

// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
app.UseSwagger();
app.UseSwaggerUI();
//}

app.UseHttpsRedirection();

app.UseSession();

app.UseCors(bulider =>
    bulider
        .SetIsOriginAllowedToAllowWildcardSubdomains()
        .WithOrigins(builder.Configuration.GetSection("CorsOriginsUrls").Get<string[]>())
        .AllowAnyMethod()
        .AllowAnyHeader()
        .AllowCredentials());

app.UseAuthentication();
app.UseAuthorization();
app.UseIdentityContext();

app.MapControllers();

app.UseMiddleware<LogUsernameMiddleware>();
app.UseMiddleware<ExceptionHandlingMiddleware>();


app.RunDbMigrations();

app.Run();
