using GreenOnSoftware.Commons.Dtos;
using MediatR;

namespace GreenOnSoftware.Application.Ratings.AddArticleRateCommand;

public record AddArticleRate(int Value) : IRequest<Result>
{
    internal Guid ArticleId { get; private set; }

    public AddArticleRate BindArticleId(Guid articleId)
    {
        ArticleId = articleId;

        return this;
    }
}
