using GreenOnSoftware.Application.GithubAuthentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GreenOnSoftware.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class GithubAuthenticationController : ControllerBase
{
    private readonly IGithubAuthenticationService _githubAuthenticationService;

    public GithubAuthenticationController(IGithubAuthenticationService githubAuthenticationService)
    {
        _githubAuthenticationService = githubAuthenticationService;
    }

    [HttpGet("[action]")]
    public IActionResult SignIn(string? redirectUrl)
    {
        if (!string.IsNullOrEmpty(redirectUrl))
        {
            HttpContext.Session.SetString("GithubAuthorization:RedirectUrl", redirectUrl);
        }
        var properties = _githubAuthenticationService.CreateAuthenticationProperties("/api/GithubAuthentication/Authenticate");

        return Challenge(properties, "GitHub");
    }

    [Authorize(AuthenticationSchemes = "Identity.Application, Identity.External")]
    [HttpGet("[Action]")]
    public async Task<IActionResult> Authenticate()
    {
        var result = await _githubAuthenticationService.AuthenticateAsync();
        if (result.HasErrors)
        {
            return BadRequest(result);
        }
        string? redirectUrl = HttpContext.Session.GetString("GithubAuthorization:RedirectUrl");
        if (string.IsNullOrEmpty(redirectUrl))
        {
            return Ok(result);
        }

        HttpContext.Session.Remove("GithubAuthorization:RedirectUrl");

        return Redirect(redirectUrl);
    }
}