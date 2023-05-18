using GreenOnSoftware.Commons.Resources;
using Microsoft.AspNetCore.Identity;
using MediatR;
using GreenOnSoftware.Commons.Dtos;
using GreenOnSoftware.Core.Identity;

namespace GreenOnSoftware.Application.Account.SignInCommand;

internal class SignInHandler : IRequestHandler<SignIn, Result>
{
    private readonly SignInManager<User> _signInManager;

    public SignInHandler(SignInManager<User> signInManager)
    {
        _signInManager = signInManager;
    }

    public async Task<Result> Handle(SignIn command, CancellationToken cancellationToken)
    {
        var response = new Result();

        await _signInManager.SignOutAsync();

        var result = await _signInManager.PasswordSignInAsync(command.Login, command.Password, true, false);

        if (!result.Succeeded)
        {
            response.AddErrorWithLogging(ErrorMessages.WrongCredentials);
        }

        return response;
    }
}
