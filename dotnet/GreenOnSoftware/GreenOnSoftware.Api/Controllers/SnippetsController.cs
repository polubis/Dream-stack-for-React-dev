using GreenOnSoftware.Application.Snippets.AddSnippetCommand;
using GreenOnSoftware.Application.Snippets.GetSnippetByIdQuery;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace GreenOnSoftware.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class SnippetsController : ControllerBase
{
    private readonly IMediator _mediator;

    public SnippetsController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpPost]
    public async Task<IActionResult> Add([FromBody] AddSnippet command)
    {
        var result = await _mediator.Send(command);

        if (result.HasErrors)
        {
            return BadRequest(result);
        }

        return Ok(result);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(Guid id)
    {
        var result = await _mediator.Send(new GetSnippetById(id));

        if (result.HasErrors)
        {
            return BadRequest(result);
        }

        return Ok(result);
    }

}
