using GreenOnSoftware.Commons.Resources;
using Microsoft.AspNetCore.Identity;
using MediatR;
using GreenOnSoftware.Commons.Dtos;
using GreenOnSoftware.Application.Services.Interfaces;
using GreenOnSoftware.Application.Account.ForgottenPasswordCommand;
using GreenOnSoftware.Core.Identity;

namespace GreenOnSoftware.Application.Account.ForgottenPasswordCommand;

internal class ForgottenPasswordHandler : IRequestHandler<ForgottenPassword, Result>
{
    private readonly UserManager<User> _userManager;
    private readonly IEmailService _emailService;

    public ForgottenPasswordHandler(UserManager<User> userManager, IEmailService emailService)
    {
        _userManager = userManager;
        _emailService = emailService;
    }

    public async Task<Result> Handle(ForgottenPassword command, CancellationToken cancellationToken)
    {
        var result = new Result();

        var user = await _userManager.FindByNameAsync(command.Login);

        if (user is null)
        {
            //No error for security reasons
            return result;
        }

        string token = await _userManager.GeneratePasswordResetTokenAsync(user);
        var emailSenderResult = await _emailService.SendResetPasswordEmailAsync(user.Email, user.UserName, user.Id, token);

        if (emailSenderResult.HasErrors)
        {
            result.AddErrors(emailSenderResult);
        }

        return result;
    }
}
