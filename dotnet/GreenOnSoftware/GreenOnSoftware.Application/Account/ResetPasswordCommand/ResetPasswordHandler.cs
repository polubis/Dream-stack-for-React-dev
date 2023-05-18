using GreenOnSoftware.Commons.Resources;
using Microsoft.AspNetCore.Identity;
using MediatR;
using GreenOnSoftware.Commons.Dtos;
using System.Text;
using GreenOnSoftware.Commons.Extensions;
using Microsoft.AspNetCore.Http;
using GreenOnSoftware.Application.Account.ResetPasswordCommand;
using GreenOnSoftware.Core.Identity;

namespace GreenOnSoftware.Application.Account.ResetPasswordCommand;

internal class ResetPasswordHandler : IRequestHandler<ResetPassword, Result>
{
    private readonly UserManager<User> _userManager;

    public ResetPasswordHandler(UserManager<User> userManager)
    {
        _userManager = userManager;
    }

    public async Task<Result> Handle(ResetPassword command, CancellationToken cancellationToken)
    {
        var result = new Result();
        var user = await _userManager.FindByIdAsync(command.UserId);

        if (user is null)
        {
            result.AddErrorWithLogging(ErrorMessages.UserNotFound);
            return result;
        }
        string token = DecodeToken(command.Token);
        var resetPasswordResult = await _userManager.ResetPasswordAsync(user, token, command.NewPassword);

        if (!resetPasswordResult.Succeeded)
        {
            result.AddErrors(resetPasswordResult.GetErrors());
        }

        return result;
    }

    private static string DecodeToken(string tokenBase64)
    {
        return Encoding.ASCII.GetString(Convert.FromBase64String(tokenBase64));
    }
}
