using GreenOnSoftware.Commons.Consts;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using GreenOnSoftware.Application.Reviews.GetAllReviewerReviewsQuery;

namespace GreenOnSoftware.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ReviewsController: ControllerBase
{
    private readonly IMediator _mediator;

    public ReviewsController(IMediator mediator)
    {
        _mediator = mediator;
    }


    [Authorize(Roles = $"{Role.Admin},{Role.ContentEditor}")]
    [HttpGet("reviews")]
    public async Task<IActionResult> GetReviews()
    {
        var result = await _mediator.Send(new GetAllReviewerReviews());

        if (result.HasErrors)
        {
            return BadRequest(result);
        }

        return Ok(result);
    }

}
