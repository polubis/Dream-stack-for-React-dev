using GreenOnSoftware.Commons.Dtos;
using Microsoft.AspNetCore.Authentication;

namespace GreenOnSoftware.Application.GithubAuthentication;

public interface IGithubAuthenticationService
{
    Task<Result<GithubTokenDto>> AuthenticateAsync();
    AuthenticationProperties CreateAuthenticationProperties(string redirectUrl);
    Task<string> GetGithubTokenAsync(string? username = null);
}