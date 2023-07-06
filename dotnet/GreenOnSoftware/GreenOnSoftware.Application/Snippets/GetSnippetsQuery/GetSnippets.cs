using GreenOnSoftware.Commons.CQRS;

namespace GreenOnSoftware.Application.Snippets.GetSnippetsQuery;

public record GetSnippets(string? Search, int? ItemsPerPage, int? CurrentPage) : ISearchQuery<SnippetLookupDto>;
