using GreenOnSoftware.Commons.Consts;
using GreenOnSoftware.Core.Identity;
using GreenOnSoftware.Infrastructure.Security;
using Microsoft.AspNetCore.Identity;

namespace GreenOnSoftware.Infrastructure.DataSeeder;

public static class GreenOnSoftwareDataSeeder
{
    private readonly static string TempEmailValue = "@greenonsoftware.com";

    public static void SeedData(UserManager<User> userManager, RoleManager<IdentityRole<Guid>> roleManager, SecurityConfiguration configuration)
    {
        SeedRolesAsync(roleManager).GetAwaiter().GetResult();
        SeedUsersAsync(userManager, configuration).GetAwaiter().GetResult();
    }

    private static async Task SeedRolesAsync(RoleManager<IdentityRole<Guid>> roleManager)
    {
        foreach (string role in Role.All)
        {
            if (!await roleManager.RoleExistsAsync(role))
            {
                await roleManager.CreateAsync(new IdentityRole<Guid>(role));
            }
        }
    }

    private static async Task SeedUsersAsync(UserManager<User> userManager, SecurityConfiguration configuration)
    {
        string[] admins = configuration.AdminNames.Split(',');
        foreach (var admin in admins)
        {
            if (await userManager.FindByNameAsync(admin) is null)
            {
                var email = $"{admin}{TempEmailValue}";
                var newAdmin = new User {
                    UserName = admin,
                    NormalizedUserName = admin.ToUpper(),
                    Email = email,
                    NormalizedEmail = email.ToUpper()
                };
                var createUserResult = await userManager.CreateAsync(newAdmin, configuration.AdminPassword);

                if (!createUserResult.Succeeded)
                {
                    throw new Exception(createUserResult.Errors.First().Description);
                }

                var addToRoleResult = await userManager.AddToRoleAsync(newAdmin, Role.Admin);

                if (!addToRoleResult.Succeeded)
                {
                    throw new Exception(addToRoleResult.Errors.First().Description);
                }
            }
        }
    }
}