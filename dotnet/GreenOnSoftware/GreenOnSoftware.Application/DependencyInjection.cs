using GreenOnSoftware.Application.Services;
using GreenOnSoftware.Application.Services.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace GreenOnSoftware.Application;

public static class DependencyInjection
{
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        services.AddTransient<IEmailService, EmailService>();
        services.AddTransient<IThumbnailService, ThumbnailService>();
        services.AddTransient<IRatingsSessionService, RatingsSessionService>();

        return services;
    }
}