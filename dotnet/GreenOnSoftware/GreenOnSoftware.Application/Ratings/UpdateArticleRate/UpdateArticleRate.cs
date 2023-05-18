using GreenOnSoftware.Commons.Dtos;
using MediatR;

namespace GreenOnSoftware.Application.Ratings.UpdateArticleRate;

public record UpdateArticleRate(int Value) : IRequest<Result>
{
    internal Guid ArticleId { get; private set; }

    public UpdateArticleRate BindArticleId(Guid articleId)
    {
        ArticleId = articleId;

        return this;
    }
}
