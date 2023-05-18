using GreenOnSoftware.Application.Account.RegisterCommand;
using GreenOnSoftware.Application.Users.AddToRoleCommand;
using GreenOnSoftware.Application.Users.GetUsersQuery;
using GreenOnSoftware.Application.Users.RemoveFromRoleCommand;
using GreenOnSoftware.Commons.Consts;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GreenOnSoftware.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
[Authorize(Roles = Role.Admin)]
public class UsersController : ControllerBase
{
    private readonly IMediator _mediator;

    public UsersController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpGet]
    public async Task<IActionResult> GetUsers([FromQuery] GetUsers query)
    {
        var result = await _mediator.Send(query);

        if (result.HasErrors)
        {
            return BadRequest(result);
        }

        return Ok(result);
    }

    [HttpPatch("{id}/AddToRole")]
    public async Task<IActionResult> AddUserToRole(Guid id, [FromBody] AddToRole command)
    {
        var result = await _mediator.Send(command.BindId(id));

        if (result.HasErrors)
        {
            return BadRequest(result);
        }

        return Ok(result);
    }

    [HttpPatch("{id}/RemoveFromRole")]
    public async Task<IActionResult> RemoveUserFromRole(Guid id, [FromQuery] RemoveFromRole command)
    {
        var result = await _mediator.Send(command.BindId(id));

        if (result.HasErrors)
        {
            return BadRequest(result);
        }

        return Ok(result);
    }
}
