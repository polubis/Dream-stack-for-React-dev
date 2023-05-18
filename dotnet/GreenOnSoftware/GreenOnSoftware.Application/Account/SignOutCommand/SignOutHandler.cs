using Microsoft.AspNetCore.Identity;
using MediatR;
using GreenOnSoftware.Commons.Dtos;
using GreenOnSoftware.Application.Account.SignOutCommand;
using GreenOnSoftware.Core.Identity;

namespace GreenOnSoftware.Application.Account.SignOutCommand;

internal class SignOutHandler : IRequestHandler<SignOut, Result>
{
    private readonly SignInManager<User> _signInManager;

    public SignOutHandler(SignInManager<User> signInManager)
    {
        _signInManager = signInManager;
    }

    public async Task<Result> Handle(SignOut command, CancellationToken cancellationToken)
    {
        var response = new Result();
        await _signInManager.SignOutAsync();

        return response;
    }
}
