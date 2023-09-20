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
using GreenOnSoftware.Application.Articles.GetArticleQuery;
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
using GreenOnSoftware.Core.Enums;
using GreenOnSoftware.Application.Ratings.UpdateArticleRate;

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
    [HttpPut("pl/{urlIdentifier}")]
    public async Task<IActionResult> UpdatePl( string urlIdentifier, [FromForm] UpdateArticle command)
    {
        var result = await _mediator.Send(command.Bind(Language.Pl, urlIdentifier));

        if (result.HasErrors)
        {
            return BadRequest(result);
        }

        return Ok(result);
    }

    [Authorize]
    [HttpPut("en/{urlIdentifier}")]
    public async Task<IActionResult> UpdateEn(string urlIdentifier, [FromForm] UpdateArticle command)
    {
        var result = await _mediator.Send(command.Bind(Language.En, urlIdentifier));

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
    [HttpGet("pl/{urlIdentifier}")]
    [SwaggerResponse(StatusCodes.Status200OK, type: typeof(Result<ArticleDto>))]
    public async Task<IActionResult> GetPlArticleByUrl( string urlIdentifier)
    {
        var result = await _mediator.Send(new GetArticle(Language.Pl, urlIdentifier));

        if (result.HasErrors)
        {
            return BadRequest(result);
        }

        return Ok(result);
    }

    [AllowAnonymous]
    [HttpGet("en/{urlIdentifier}")]
    [SwaggerResponse(StatusCodes.Status200OK, type: typeof(Result<ArticleDto>))]
    public async Task<IActionResult> GetEnArticleByUrl(string urlIdentifier)
    {
        var result = await _mediator.Send(new GetArticle(Language.En, urlIdentifier));

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
        var result = await _mediator.Send(new GetArticle(id));

        if (result.HasErrors)
        {
            return BadRequest(result);
        }

        return Ok(result);
    }

    [AllowAnonymous]
    [HttpGet("pl")]
    [SwaggerResponse(StatusCodes.Status200OK, type: typeof(PagedResult<ArticleLookupDto>))]
    public async Task<IActionResult> GetArticlesPl([FromQuery] GetArticles query)
    {
        var result = await _mediator.Send(query.Bind(Language.Pl));

        if (result.HasErrors)
        {
            return BadRequest(result);
        }

        return Ok(result);
    }

    [AllowAnonymous]
    [HttpGet("en")]
    [SwaggerResponse(StatusCodes.Status200OK, type: typeof(PagedResult<ArticleLookupDto>))]
    public async Task<IActionResult> GetArticlesEn([FromQuery] GetArticles query)
    {
        var result = await _mediator.Send(query.Bind(Language.En));

        if (result.HasErrors)
        {
            return BadRequest(result);
        }

        return Ok(result);
    }

    [Authorize]
    [HttpGet("my/pl")]
    [SwaggerResponse(StatusCodes.Status200OK, type: typeof(PagedResult<ArticleLookupDto>))]
    public async Task<IActionResult> GetMyArticlesMyPl([FromQuery] GetArticles query)
    {
        var result = await _mediator.Send(query.Bind(Language.Pl, onlyMyArticles: true));

        if (result.HasErrors)
        {
            return BadRequest(result);
        }

        return Ok(result);
    }

    [Authorize]
    [HttpGet("my/en")]
    [SwaggerResponse(StatusCodes.Status200OK, type: typeof(PagedResult<ArticleLookupDto>))]
    public async Task<IActionResult> GetMyArticlesEn([FromQuery] GetArticles query)
    {
        var result = await _mediator.Send(query.Bind(Language.En, onlyMyArticles: true));

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
    [HttpPut("{articleId}/ratings")]
    [SwaggerResponse(StatusCodes.Status200OK, type: typeof(Result))]
    public async Task<IActionResult> UpdateRate(Guid articleId, [FromBody] UpdateArticleRate command)
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
