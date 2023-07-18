using GreenOnSoftware.Commons.CQRS;
using GreenOnSoftware.Core.Enums;

namespace GreenOnSoftware.Application.Articles.GetArticlesQuery;

public record GetArticles(string[]? Status, string? Search, int? ItemsPerPage, int? CurrentPage) 
    : ISearchQuery<ArticleLookupDto>
{
    internal Language Lang { get; private set; }

    public GetArticles Bind(Language lang)
    {
        Lang = lang;

        return this;
    }
}
