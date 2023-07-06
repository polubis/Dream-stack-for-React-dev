using GreenOnSoftware.Application.Articles.GetArticlesQuery;
using GreenOnSoftware.Application.Snippets.AddSnippetCommand;
using GreenOnSoftware.Application.Snippets.GetSnippetByIdQuery;
using GreenOnSoftware.Application.Snippets.GetSnippetsQuery;
using GreenOnSoftware.Commons.Consts;
using GreenOnSoftware.Commons.Dtos;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

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

    [Authorize(Roles = Role.Admin)]
    [HttpGet]
    [SwaggerResponse(StatusCodes.Status200OK, type: typeof(PagedResult<SnippetLookupDto>))]
    public async Task<IActionResult> GetSnippets([FromQuery] GetSnippets query)
    {
        var result = await _mediator.Send(query);

        if (result.HasErrors)
        {
            return BadRequest(result);
        }

        return Ok(result);
    }

}
