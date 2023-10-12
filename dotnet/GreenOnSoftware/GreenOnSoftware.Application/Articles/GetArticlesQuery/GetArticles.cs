using GreenOnSoftware.Commons.CQRS;
using GreenOnSoftware.Core.Enums;

namespace GreenOnSoftware.Application.Articles.GetArticlesQuery;

public record GetArticles(string[]? Status, string? Search, int? ItemsPerPage, int? CurrentPage, string[]? Tags)
    : ISearchQuery<ArticleLookupDto>
{
    internal Language Lang { get; private set; }

    internal bool OnlyMyArticles;

    public GetArticles Bind(Language lang)
    {
        Lang = lang;

        return this;
    }

    public GetArticles Bind(Language lang, bool onlyMyArticles)
    {
        OnlyMyArticles = onlyMyArticles;
        Lang = lang;

        return this;
    }
}
