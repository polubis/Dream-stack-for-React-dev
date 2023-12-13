using GreenOnSoftware.Core.Identity;
using GreenOnSoftware.DataAccess;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Identity;

namespace GreenOnSoftware.Api.Startup;

public static class AuthenticationConfig
{
    public static IServiceCollection AddAuthentication(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddIdentity<User, IdentityRole<Guid>>(options => options.SignIn.RequireConfirmedAccount = false)
            .AddEntityFrameworkStores<GreenOnSoftwareDbContext>()
            .AddDefaultTokenProviders();

        services.Configure<IdentityOptions>(options => {
            // Password settings.
            options.Password.RequireDigit = false;
            options.Password.RequireLowercase = false;
            options.Password.RequireNonAlphanumeric = false;
            options.Password.RequireUppercase = false;
            options.Password.RequiredLength = 6;
            options.Password.RequiredUniqueChars = 1;

            // Lockout settings.
            options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5);
            options.Lockout.MaxFailedAccessAttempts = 5;
            options.Lockout.AllowedForNewUsers = true;

            // User settings.
            options.User.AllowedUserNameCharacters =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_";
            options.User.RequireUniqueEmail = true;
        });

        services.ConfigureApplicationCookie(options => {
            // Cookie settings
            options.Cookie.HttpOnly = true;
            options.Cookie.SameSite = SameSiteMode.None;
            options.ExpireTimeSpan = TimeSpan.FromDays(1);

            options.SlidingExpiration = true;

            options.Events = new CookieAuthenticationEvents {
                OnRedirectToLogin = context => {
                    context.Response.StatusCode = StatusCodes.Status401Unauthorized;
                    return Task.CompletedTask;
                },
                OnRedirectToAccessDenied = context => {
                    context.Response.StatusCode = StatusCodes.Status403Forbidden;
                    return Task.CompletedTask;
                },
            };
        });

        var githubConfig = configuration.GetSection("Github");

        var siema = githubConfig["ClientSecret"];

        services
            .AddAuthentication(options =>
            {
                options.DefaultChallengeScheme = IdentityConstants.ExternalScheme;
            })
            .AddGitHub(options => {
                options.ClientId = githubConfig["ClientId"];
                options.ClientSecret = githubConfig["ClientSecret"];
                options.Scope.Add("user:email");
                options.SaveTokens = true;
            });

        return services;
    }
}
