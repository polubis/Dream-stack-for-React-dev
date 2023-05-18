using GreenOnSoftware.Commons.Consts;
using GreenOnSoftware.Commons.Dtos;
using GreenOnSoftware.Commons.Extensions;
using MediatR;
using Microsoft.AspNetCore.Identity;
using GreenOnSoftware.Application.Account.RegisterCommand;
using GreenOnSoftware.Core.Identity;

namespace GreenOnSoftware.Application.Account.RegisterCommand;

internal class RegistarHandler : IRequestHandler<Register, Result>
{
    private readonly UserManager<User> _userManager;

    public RegistarHandler(UserManager<User> userManager)
    {
        _userManager = userManager;
    }

    public async Task<Result> Handle(Register command, CancellationToken cancellationToken)
    {
        var result = new Result();

        var newUser = new User {
            UserName = command.Login,
            Email = command.Email,
        };

        var addUserResult = await _userManager.CreateAsync(newUser, command.Password);

        if (!addUserResult.Succeeded)
        {
            result.AddErrors(addUserResult.GetErrors());
            return result;
        }

        var addToRoleResult = await _userManager.AddToRoleAsync(newUser, Role.GeneralUser);

        if (!addToRoleResult.Succeeded)
        {
            result.AddErrorsWithLogging(addToRoleResult.GetErrors());
            var deletionResult = await _userManager.DeleteAsync(newUser);
            if (!deletionResult.Succeeded)
            {
                result.AddErrorsWithLogging(deletionResult.GetErrors());
            }
        }

        return result;
    }
}
