using GreenOnSoftware.Commons.Dtos;
using GreenOnSoftware.Commons.Resources;
using GreenOnSoftware.Core.Identity;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Serilog;
using System.Security.Claims;
using GreenOnSoftware.Commons.Extensions;
using GreenOnSoftware.Commons.Consts;

namespace GreenOnSoftware.Application.GithubAuthentication;

public class GithubAuthenticationService : IGithubAuthenticationService
{
    private readonly UserManager<User> _userManager;
    private readonly SignInManager<User> _signInManager;

    public GithubAuthenticationService(
        UserManager<User> userManager,
        SignInManager<User> signInManager)
    {
        _userManager = userManager;
        _signInManager = signInManager;
    }

    public AuthenticationProperties CreateAuthenticationProperties(string redirectUrl)
    {

        return _signInManager.ConfigureExternalAuthenticationProperties("GitHub", new PathString(redirectUrl));
    }

    public async Task<Result<GithubTokenDto>> AuthenticateAsync()
    {
        var response = new Result<GithubTokenDto>();

        var externalLoginInfo = await _signInManager.GetExternalLoginInfoAsync();
        if (externalLoginInfo is null)
        {
            response.AddError(ErrorMessages.ActionFailed, ErrorActionNames.ExternalSignIn);
            return response;
        }
        string? applicationUserId = GetAppicationUserId();

        var user = await _userManager.FindByLoginAsync(externalLoginInfo.LoginProvider, externalLoginInfo.ProviderKey);
        if (user is null)
        {
            var userResult = await GetApplicationUser(applicationUserId, externalLoginInfo.Principal.Claims);
            if (userResult.HasErrors)
            {
                response.AddErrors(userResult);
                response.AddError(ErrorMessages.ActionFailed, ErrorActionNames.ExternalSignIn);
                return response;
            }
            user = userResult.Data;

            var addLoginResult = await _userManager.AddLoginAsync(user, externalLoginInfo);
            if (!addLoginResult.Succeeded)
            {
                response.AddError(ErrorMessages.ActionFailed, ErrorActionNames.AddExternalLogin);
                return response;
            }
        }
        else
        {
            if (!string.IsNullOrEmpty(applicationUserId) && applicationUserId != user.Id.ToString())
            {
                response.AddError(ErrorMessages.AlreadyConnectedWithAnotherAccount);
                return response;
            }
        }

        SignInResult signInResult = await _signInManager.ExternalLoginSignInAsync(externalLoginInfo.LoginProvider, externalLoginInfo.ProviderKey, true);

        if (!signInResult.Succeeded)
        {
            response.AddError(ErrorMessages.ActionFailed, ErrorActionNames.ExternalSignIn);
            return response;
        }

        IdentityResult saveTokensResult = await _signInManager.UpdateExternalAuthenticationTokensAsync(externalLoginInfo);

        if (!saveTokensResult.Succeeded)
        {
            response.AddErrors(saveTokensResult.GetErrors());
            return response;
        }

        return response;
    }

    public async Task<string> GetGithubTokenAsync(string username = null)
    {
        if (string.IsNullOrEmpty(username))
        {
            username = _signInManager.Context.User.Claims.Single(x => x.Type == ClaimTypes.Name).Value;
        }

        User currentUser = await _userManager.FindByNameAsync(username);
        string githubToken = await _userManager.GetAuthenticationTokenAsync(currentUser, "Github", "access_token");

        return githubToken;
    }

    private string? GetAppicationUserId()
    {
        return _signInManager.Context.User
            .Identities
            .SingleOrDefault(x => x.AuthenticationType == IdentityConstants.ApplicationScheme)
            ?.Claims
            .Single(x => x.Type == ClaimTypes.NameIdentifier)
            .Value;
    }

    private async Task<Result<User>> GetApplicationUser(string? applicationUserId, IEnumerable<Claim> externalClaims)
    {
        var result = new Result<User>();
        if (applicationUserId != null)
        {
            result.SetData(await _userManager.FindByIdAsync(applicationUserId));
            if (result.Data != null)
            {
                return result;
            }
        }

        var newUser = new User {
            Email = externalClaims.Single(x => x.Type == ClaimTypes.Email).Value,
            UserName = externalClaims.Single(x => x.Type == ClaimTypes.Name).Value,
        };
        var addUserResult = await _userManager.CreateAsync(newUser);
        if (!addUserResult.Succeeded)
        {
            result.AddErrors(addUserResult.GetErrors());
            return result;
        }
        var addToRoleResult = await _userManager.AddToRoleAsync(newUser, Role.GeneralUser);
        if (!addToRoleResult.Succeeded)
        {
            result.AddErrors(addToRoleResult.GetErrors());
            Log.Error($"Failed to assign role to new user {newUser.UserName}.");
        }

        result.SetData(newUser);

        return result;
    }
}