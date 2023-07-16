using GreenOnSoftware.Commons.Dtos;
using GreenOnSoftware.Core.Enums;
using MediatR;

namespace GreenOnSoftware.Application.Articles.GetArticleQuery;

public class GetArticle: IRequest<Result<ArticleDto>>
{
    public  Guid? Id { get; set; }

    public Language? Lang { get; set; }

    public string? UrlIdentifier { get; set; }

    public GetArticle(Guid id)
    {
        Id = id;
    }

    public GetArticle(Language lang, string urlIdentifier)
    {
        Lang = lang;
        UrlIdentifier = urlIdentifier;
    }
}

