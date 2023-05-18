using GreenOnSoftware.Application.Services.Interfaces;
using GreenOnSoftware.Infrastructure.BlobStorage;
using GreenOnSoftware.Infrastructure.SendGrid;
using Microsoft.Extensions.DependencyInjection;

namespace GreenOnSoftware.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services)
    {
        services.AddTransient<IEmailSenderService, EmailSenderService>();
        services.AddTransient<IBlobStorageService, BlobStorageService>();

        return services;
    }
}