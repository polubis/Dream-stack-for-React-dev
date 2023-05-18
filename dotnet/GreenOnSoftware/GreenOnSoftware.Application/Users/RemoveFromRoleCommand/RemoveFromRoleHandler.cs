using GreenOnSoftware.Commons.Consts;
using GreenOnSoftware.Commons.Dtos;
using GreenOnSoftware.Core.Identity;
using MediatR;
using Microsoft.AspNetCore.Identity;

namespace GreenOnSoftware.Application.Users.RemoveFromRoleCommand;

internal sealed class RemoveFromRoleHandler : IRequestHandler<RemoveFromRole, Result>
{
    private readonly UserManager<User> _userManager;

    public RemoveFromRoleHandler(UserManager<User> userManager)
    {
        _userManager = userManager;
    }

    public async Task<Result> Handle(RemoveFromRole command, CancellationToken cancellationToken)
    {
        var result = new Result();
        var user = await _userManager.FindByIdAsync(command.UserId.ToString());
        var isInRole = await _userManager.IsInRoleAsync(user, command.Role);

        if (!isInRole)
        {
            result.AddError($"User is not in role {command.Role}");
            return result;
        }

        var removeFromRoleResult = await _userManager.RemoveFromRoleAsync(user, Role.Admin);

        if (!removeFromRoleResult.Succeeded)
        {
            result.AddError(removeFromRoleResult.Errors.First().Description);
            return result;
        }

        return result;
    }
}