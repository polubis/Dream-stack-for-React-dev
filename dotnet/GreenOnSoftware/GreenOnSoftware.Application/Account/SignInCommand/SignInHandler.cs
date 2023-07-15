using GreenOnSoftware.Commons.Resources;
using Microsoft.AspNetCore.Identity;
using MediatR;
using GreenOnSoftware.Commons.Dtos;
using GreenOnSoftware.Core.Identity;
using Microsoft.EntityFrameworkCore;

namespace GreenOnSoftware.Application.Account.SignInCommand;

internal class SignInHandler : IRequestHandler<SignIn, Result<UserDataDto>>
{
    private readonly SignInManager<User> _signInManager;
    private readonly UserManager<User> _userManager;

    public SignInHandler(SignInManager<User> signInManager, UserManager<User> userManager)
    {
        _signInManager = signInManager;
        _userManager = userManager;
    }

    public async Task<Result<UserDataDto>> Handle(SignIn command, CancellationToken cancellationToken)
    {
        var response = new Result<UserDataDto>();

        await _signInManager.SignOutAsync();

        SignInResult result = await _signInManager.PasswordSignInAsync(command.Login, command.Password, true, false);

        if (!result.Succeeded)
        {
            response.AddErrorWithLogging(ErrorMessages.WrongCredentials);

            return response;
        }

        User user = await _userManager.Users
            .Include(x=>x.Roles)
            .FirstAsync(x=>x.UserName == command.Login, cancellationToken);

        response.SetData(new UserDataDto {
            Username = user.UserName,
            Email = user.Email,
            Roles = user.Roles.Select(x => x.Role.Name).ToArray(),
        });

        return response;
    }
}
