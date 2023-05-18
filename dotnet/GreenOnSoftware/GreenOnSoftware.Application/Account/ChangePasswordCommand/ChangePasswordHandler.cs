using Microsoft.AspNetCore.Identity;
using MediatR;
using GreenOnSoftware.Commons.Dtos;
using GreenOnSoftware.Commons.Extensions;
using GreenOnSoftware.Core.Identity;

namespace GreenOnSoftware.Application.Account.ChangePasswordCommand;

internal class ChangePasswordHandler : IRequestHandler<ChangePassword, Result>
{
    private readonly UserManager<User> _userManager;
    private readonly SignInManager<User> _signInManager;

    public ChangePasswordHandler(UserManager<User> userManager, SignInManager<User> signInManager)
    {
        _userManager = userManager;
        _signInManager = signInManager;
    }

    public async Task<Result> Handle(ChangePassword command, CancellationToken cancellationToken)
    {
        var result = new Result();
        var user = await _userManager.FindByNameAsync(_signInManager.Context.User.Identity!.Name);

        var resetPasswordResult = await _userManager.ChangePasswordAsync(user, command.CurrentPassword, command.NewPassword);

        if (!resetPasswordResult.Succeeded)
        {
            result.AddErrors(resetPasswordResult.GetErrors());
        }

        return result;
    }
}
