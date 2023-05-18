using GreenOnSoftware.Commons.Consts;
using GreenOnSoftware.Commons.Dtos;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;
using GreenOnSoftware.Application.Articles.UpdateArticleCommand;
using GreenOnSoftware.Application.Articles.AcceptArticleCommand;
using GreenOnSoftware.Application.Articles.AddArticleCommand;
using GreenOnSoftware.Application.Articles.DeleteArticleCommand;
using GreenOnSoftware.Application.Articles.GetArticleByIdQuery;
using GreenOnSoftware.Application.Articles.RejectArticleCommand;
using GreenOnSoftware.Application.Articles.GetArticlesQuery;
using GreenOnSoftware.Application.Articles.SendForApprovalCommand;
using GreenOnSoftware.Application.Reviews.AddReviewCommand;
using GreenOnSoftware.Application.Ratings.AddArticleRateCommand;
using GreenOnSoftware.Application.Ratings.GetArticleRatingQuery;
using GreenOnSoftware.Application.Ratings.RemoveArticleRateCommand;
using GreenOnSoftware.Application.Reviews.UpdateReviewCommand;
using GreenOnSoftware.Application.Reviews.DeleteReviewCommand;
using GreenOnSoftware.Application.Reviews.GetReviewsQuery;
using GreenOnSoftware.Application.Reviews.GetReviewByIdQuery;

namespace GreenOnSoftware.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ArticlesController : ControllerBase
{
    private readonly IMediator _mediator;

    public ArticlesController(IMediator mediator)
    {
        _mediator = mediator;
    }

    #region Articles

    [Authorize]
    [HttpPost]
    public async Task<IActionResult> Add([FromForm] AddArticle command)
    {
        var result = await _mediator.Send(command);

        if (result.HasErrors)
        {
            return BadRequest(result);
        }

        return Ok(result);
    }

    [Authorize]
    [HttpPut("{id}")]
    public async Task<IActionResult> Update(Guid id, [FromForm] UpdateArticle command)
    {
        var result = await _mediator.Send(command.BindId(id));

        if (result.HasErrors)
        {
            return BadRequest(result);
        }

        return Ok(result);
    }

    [Authorize(Roles = Role.Admin)]
    [HttpPatch("[action]/{id}")]
    public async Task<IActionResult> Accept(Guid id)
    {
        var result = await _mediator.Send(new AcceptArticle(id));

        if (result.HasErrors)
        {
            return BadRequest(result);
        }

        return Ok(result);
    }

    [Authorize(Roles = $"{Role.ContentEditor},{Role.Admin}")]
    [HttpPatch("[action]/{id}")]
    public async Task<IActionResult> Reject(Guid id)
    {
        var result = await _mediator.Send(new RejectArticle(id));

        if (result.HasErrors)
        {
            return BadRequest(result);
        }

        return Ok(result);
    }

    [Authorize]
    [HttpPatch("[action]/{id}")]
    public async Task<IActionResult> SendForApproval(Guid id)
    {
        var result = await _mediator.Send(new SendForApproval(id));

        if (result.HasErrors)
        {
            return BadRequest(result);
        }

        return Ok(result);
    }

    [Authorize]
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(Guid id)
    {
        var result = await _mediator.Send(new DeleteArticle(id));

        if (result.HasErrors)
        {
            return BadRequest(result);
        }

        return Ok(result);
    }

    [AllowAnonymous]
    [HttpGet("{id}")]
    [SwaggerResponse(StatusCodes.Status200OK, type: typeof(Result<ArticleDto>))]
    public async Task<IActionResult> GetArticleById(Guid id)
    {
        var result = await _mediator.Send(new GetArticleById(id));

        if (result.HasErrors)
        {
            return BadRequest(result);
        }

        return Ok(result);
    }

    [AllowAnonymous]
    [HttpGet]
    [SwaggerResponse(StatusCodes.Status200OK, type: typeof(PagedResult<ArticleLookupDto>))]
    public async Task<IActionResult> GetArticles([FromQuery] GetArticles query)
    {
        var result = await _mediator.Send(query);

        if (result.HasErrors)
        {
            return BadRequest(result);
        }

        return Ok(result);
    }

    #endregion Articles

    #region Ratings

    [AllowAnonymous]
    [HttpPost("{articleId}/ratings")]
    [SwaggerResponse(StatusCodes.Status200OK, type: typeof(Result))]
    public async Task<IActionResult> AddRate(Guid articleId, [FromBody] AddArticleRate command)
    {
        var result = await _mediator.Send(command.BindArticleId(articleId));

        if (result.HasErrors)
        {
            return BadRequest(result);
        }

        return Ok(result);
    }

    [AllowAnonymous]
    [HttpDelete("{articleId}/ratings")]
    [SwaggerResponse(StatusCodes.Status200OK, type: typeof(Result))]
    public async Task<IActionResult> RemoveRate(Guid articleId)
    {
        var result = await _mediator.Send(new RemoveArticleRate(articleId));

        if (result.HasErrors)
        {
            return BadRequest(result);
        }

        return Ok(result);
    }

    [AllowAnonymous]
    [HttpGet("{articleId}/ratings")]
    [SwaggerResponse(StatusCodes.Status200OK, type: typeof(Result<RatingsDto>))]
    public async Task<IActionResult> GetByArticleId(Guid articleId)
    {
        var result = await _mediator.Send(new GetArticleRatings(articleId));

        if (result.HasErrors)
        {
            return BadRequest(result);
        }

        return Ok(result);
    }

    #endregion

    #region Reviews

    [Authorize(Roles = $"{Role.Admin},{Role.ContentEditor}")]
    [HttpPost("{articleId}/reviews")]
    public async Task<IActionResult> AddReview(Guid articleId, [FromForm] AddReview command)
    {
        var result = await _mediator.Send(command.BindArticleId(articleId));

        if (result.HasErrors)
        {
            return BadRequest(result);
        }

        return Ok(result);
    }

    [Authorize(Roles = $"{Role.Admin},{Role.ContentEditor}")]
    [HttpPut("{articleId}/reviews/{reviewId}")]
    public async Task<IActionResult> UpdateReview(Guid articleId, Guid reviewId, [FromForm] UpdateReview command)
    {
        var result = await _mediator.Send(command.BindIds(articleId, reviewId));

        if (result.HasErrors)
        {
            return BadRequest(result);
        }

        return Ok(result);
    }

    [Authorize(Roles = $"{Role.Admin},{Role.ContentEditor}")]
    [HttpDelete("{articleId}/reviews/{reviewId}")]
    public async Task<IActionResult> DeleteReview(Guid articleId, Guid reviewId)
    {
        var result = await _mediator.Send(new DeleteReview(articleId, reviewId));

        if (result.HasErrors)
        {
            return BadRequest(result);
        }

        return Ok(result);
    }

    [Authorize]
    [HttpGet("{articleId}/reviews/{reviewId}")]
    public async Task<IActionResult> GetReviewById(Guid articleId, Guid reviewId)
    {
        var result = await _mediator.Send(new GetReviewById(articleId, reviewId));

        if (result.HasErrors)
        {
            return BadRequest(result);
        }

        return Ok(result);
    }

    [Authorize]
    [HttpGet("{articleId}/reviews")]
    public async Task<IActionResult> GetReviews(Guid articleId)
    {
        var result = await _mediator.Send(new GetReviews(articleId));

        if (result.HasErrors)
        {
            return BadRequest(result);
        }

        return Ok(result);
    }

    #endregion
}
