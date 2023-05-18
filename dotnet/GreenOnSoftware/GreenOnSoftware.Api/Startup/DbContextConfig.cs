using GreenOnSoftware.Core.Identity;
using GreenOnSoftware.DataAccess;
using GreenOnSoftware.Infrastructure.DataSeeder;
using GreenOnSoftware.Infrastructure.Security;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace GreenOnSoftware.Api.Startup;
public static class DbContextConfig
{
    public static IApplicationBuilder RunDbMigrations(this IApplicationBuilder app)
    {
        using var serviceScope = app.ApplicationServices
            .GetRequiredService<IServiceScopeFactory>()
            .CreateScope();

        using var dbContext = serviceScope.ServiceProvider
            .GetRequiredService<GreenOnSoftwareDbContext>();

        dbContext.Database.Migrate();

        var userManager = serviceScope.ServiceProvider
            .GetRequiredService<UserManager<User>>();

        var roleManager = serviceScope.ServiceProvider
            .GetRequiredService<RoleManager<IdentityRole<Guid>>>();

        var securityConfig = serviceScope.ServiceProvider
            .GetRequiredService<IOptions<SecurityConfiguration>>();

        GreenOnSoftwareDataSeeder.SeedData(userManager, roleManager, securityConfig.Value);

        return app;
    }
}
