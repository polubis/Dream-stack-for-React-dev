using GreenOnSoftware.Commons.Consts;
using GreenOnSoftware.Commons.Dtos;
using GreenOnSoftware.Commons.Resources;
using GreenOnSoftware.Core.Identity;
using MediatR;
using Microsoft.AspNetCore.Identity;

namespace GreenOnSoftware.Application.Users.AddToRoleCommand;

internal sealed class AddToRoleHandler : IRequestHandler<AddToRole, Result>
{
    private readonly UserManager<User> _userManager;

    public AddToRoleHandler(UserManager<User> userManager)
    {
        _userManager = userManager;
    }

    public async Task<Result> Handle(AddToRole command, CancellationToken cancellationToken)
    {
        var result = new Result();
        var user = await _userManager.FindByIdAsync(command.UserId.ToString());

        if(user == null)
        {
            result.AddError(ErrorMessages.UserNotFound);
            return result;
        }

        var addToRoleResult = await _userManager.AddToRoleAsync(user, command.Role);

        if (!addToRoleResult.Succeeded)
        {
            result.AddError(addToRoleResult.Errors.First().Description);
            return result;
        }

        return result;
    }
}