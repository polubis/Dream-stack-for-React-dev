using GreenOnSoftware.Commons.Dtos;
using MediatR;

namespace GreenOnSoftware.Application.Reviews.AddReviewCommand;

public record AddReview(string Content) : IRequest<Result>
{
    internal Guid ArticleId { get; private set; }

    public AddReview BindArticleId(Guid articleId)
    {
        ArticleId = articleId;

        return this;
    }
}
