using GreenOnSoftware.Commons.Dtos;
using GreenOnSoftware.Core.Models;
using MediatR;

namespace GreenOnSoftware.Application.Reviews.UpdateReviewCommand;

public record UpdateReview(string Content) : IRequest<Result>
{
    internal Guid ArticleId { get; private set; }
    internal Guid ReviewId { get; private set; }

    public UpdateReview BindIds(Guid articleId, Guid reviewId)
    {
        ArticleId = articleId;
        ReviewId = reviewId;

        return this;
    }
}
