using GreenOnSoftware.Commons.CQRS;

namespace GreenOnSoftware.Application.Articles.GetArticlesQuery;

public record GetArticles(string[]? Status, string? Search, int? ItemsPerPage, int? CurrentPage) 
    : ISearchQuery<ArticleLookupDto>;
