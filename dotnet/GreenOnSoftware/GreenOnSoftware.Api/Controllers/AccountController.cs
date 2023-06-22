using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using GreenOnSoftware.Application.Account.ChangePasswordCommand;
using GreenOnSoftware.Application.Account.ForgottenPasswordCommand;
using GreenOnSoftware.Application.Account.RegisterCommand;
using GreenOnSoftware.Application.Account.ResetPasswordCommand;
using GreenOnSoftware.Application.Account.SignInCommand;
using GreenOnSoftware.Application.Account.SignOutCommand;
using GreenOnSoftware.Application.Ratings.SetAvatarNameCommand;
using GreenOnSoftware.Commons.Dtos;
using Swashbuckle.AspNetCore.Annotations;
using GreenOnSoftware.Application.Account.GetAvatarNameQuery;

namespace GreenOnSoftware.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
[Authorize]
public class AccountController : ControllerBase
{
    private readonly IMediator _mediator;

    public AccountController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [AllowAnonymous]
    [HttpPost("[action]")]
    public async Task<IActionResult> Register([FromBody] Register command)
    {
        var result = await _mediator.Send(command);

        if (result.HasErrors)
        {
            return BadRequest(result);
        }

        return Ok();
    }

    [AllowAnonymous]
    [HttpPost("[action]")]
    public async Task<IActionResult> SignIn([FromBody] SignIn command)
    {
        var result = await _mediator.Send(command);

        if (result.HasErrors)
        {
            return BadRequest(result);
        }

        return NoContent();
    }

    [HttpPost("SignOut")]
    public async Task<IActionResult> SignOutUser()
    {
        var result = await _mediator.Send(new SignOut());

        if (result.HasErrors)
        {
            return BadRequest(result);
        }

        return Ok();
    }

    [AllowAnonymous]
    [HttpPost("[action]")]
    public async Task<IActionResult> ForgottenPassword([FromBody] ForgottenPassword command)
    {
        var result = await _mediator.Send(command);

        if (result.HasErrors)
        {
            return BadRequest(result);
        }

        return Ok(result);
    }

    [AllowAnonymous]
    [HttpPost("[action]")]
    public async Task<IActionResult> ResetPassword([FromBody] ResetPassword command)
    {
        var result = await _mediator.Send(command);

        if (result.HasErrors)
        {
            return BadRequest(result);
        }

        return Ok(result);
    }

    [HttpPost("[action]")]
    public async Task<IActionResult> ChangePassword([FromBody] ChangePassword command)
    {
        var result = await _mediator.Send(command);

        if (result.HasErrors)
        {
            return BadRequest(result);
        }

        return Ok(result);
    }

    [AllowAnonymous]
    [HttpPost("[action]")]
    [SwaggerResponse(StatusCodes.Status200OK, type: typeof(Result))]
    public async Task<IActionResult> SetAvatarName(SetAvatarName command)
    {
        var result = await _mediator.Send(command);

        if (result.HasErrors)
        {
            return BadRequest(result);
        }

        return Ok(result);
    }

    [AllowAnonymous]
    [HttpGet("[action]")]
    [SwaggerResponse(StatusCodes.Status200OK, type: typeof(Result))]
    public async Task<IActionResult> GetAvatarName()
    {
        var result = await _mediator.Send(new GetAvatarName());

        if (result.HasErrors)
        {
            return BadRequest(result);
        }

        return Ok(result);
    }
}
