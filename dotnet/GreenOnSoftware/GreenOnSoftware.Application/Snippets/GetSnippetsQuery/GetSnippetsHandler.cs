using AutoMapper;
using AutoMapper.QueryableExtensions;
using FluentValidation;
using GreenOnSoftware.Commons.Context;
using GreenOnSoftware.Commons.Dtos;
using GreenOnSoftware.Core.Models.Snippets;
using GreenOnSoftware.DataAccess;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace GreenOnSoftware.Application.Snippets.GetSnippetsQuery;

internal class GetSnippetsHandler : IRequestHandler<GetSnippets, PagedResult<SnippetLookupDto>>
{
    private readonly GreenOnSoftwareDbContext _dbContext;
    private readonly IMapper _mapper;
    private readonly IContext _context;

    public GetSnippetsHandler(GreenOnSoftwareDbContext dbContext, IMapper mapper, IContext context)
    {
        _dbContext = dbContext;
        _mapper = mapper;
        _context = context;
    }

    public async Task<PagedResult<SnippetLookupDto>> Handle(GetSnippets query, CancellationToken cancellationToken)
    {
        var result = new PagedResult<SnippetLookupDto>();
        int itemsPerPage = query.ItemsPerPage ?? 20;
        int currentPage = query.CurrentPage ?? 1;
        var queryWords = query.Search?.Split(' ')
            .Select(x => x.Trim())
            .Where(x => !string.IsNullOrEmpty(x))
            .ToArray()
            ?? Array.Empty<string>();

        IQueryable<Snippet> queryable = _dbContext.Snippets;

        var totalItems = await queryable.CountAsync(cancellationToken);
        var totalPages = totalItems <= itemsPerPage ? 1 : (int)Math.Ceiling((double)totalItems / itemsPerPage);

        queryable = queryWords.Aggregate(queryable, (current, word) => current.Where(x => x.Name.Contains(word) || x.Description.Contains(word)));

        var items = await queryable
            .Distinct()
            .OrderByDescending(x => x.CreatedDate)
            .ThenBy(x => x.Name)
            .Skip(itemsPerPage * (currentPage - 1))
            .Take(itemsPerPage)
            .AsNoTracking()
            .ProjectTo<SnippetLookupDto>(_mapper.ConfigurationProvider)
            .ToListAsync(cancellationToken);

        result.SetData(items, itemsPerPage, currentPage, items.Count, totalPages);

        return result;
    }
}
