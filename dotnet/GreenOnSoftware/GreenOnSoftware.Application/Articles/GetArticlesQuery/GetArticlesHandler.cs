using AutoMapper;
using AutoMapper.QueryableExtensions;
using GreenOnSoftware.Commons.Context;
using GreenOnSoftware.Commons.Dtos;
using GreenOnSoftware.Commons.Extensions;
using GreenOnSoftware.Core.Enums;
using GreenOnSoftware.Core.Models;
using GreenOnSoftware.DataAccess;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace GreenOnSoftware.Application.Articles.GetArticlesQuery;

internal class GetArticlesHandler : IRequestHandler<GetArticles, PagedResult<ArticleLookupDto>>
{
    private readonly GreenOnSoftwareDbContext _dbContext;
    private readonly IMapper _mapper;
    private readonly IContext _context;

    public GetArticlesHandler(GreenOnSoftwareDbContext dbContext, IMapper mapper, IContext context)
    {
        _dbContext = dbContext;
        _mapper = mapper;
        _context = context;
    }

    public async Task<PagedResult<ArticleLookupDto>> Handle(GetArticles query, CancellationToken cancellationToken)
    {
        var result = new PagedResult<ArticleLookupDto>();
        int itemsPerPage = query.ItemsPerPage ?? 20;
        int currentPage = query.CurrentPage ?? 1;
        var queryWords = query.Search?.Split(' ')
            .Select(x => x.Trim())
            .Where(x => !string.IsNullOrEmpty(x))
            .ToArray()
            ?? Array.Empty<string>();

        var statuses = query.Status?.Select(x => x.ToEnum<Status>()).Distinct().ToArray();

        var isAnnonymous = !_context.Identity.IsAuthenticated;
        var isGeneralUser = _context.Identity.IsGeneralUser;
        var isAdminOrContentEditor = _context.Identity.IsAdmin || _context.Identity.IsContentEditor;

        IQueryable<Article> queryable = _dbContext.Articles
            .Include(x => x.Author)
            .Where(x => !x.IsDeleted && x.Lang == query.Lang)
            .Where(() => query.OnlyMyArticles, x => x.AuthorId == _context.Identity.Id)
            .Where(() => statuses != null, x => statuses!.Contains(x.Status))
            .Where(() => isAnnonymous, x => x.Status == Status.Accepted)
            .Where(() => isGeneralUser, x => x.Status == Status.Accepted || x.AuthorId == _context.Identity.Id)
            .Where(() => isAdminOrContentEditor, x => x.Status != Status.Draft || x.AuthorId == _context.Identity.Id);
        
        if(query.Tags?.Length > 0)
        {
            foreach(var tag in query.Tags)
            {

                queryable = queryable
                    .Where(x => x.Tags.Any(t=>t.Name == tag));
            }
        }

        var totalItems = await queryable.CountAsync(cancellationToken);
        var totalPages = totalItems <= itemsPerPage ? 1 : (int)Math.Ceiling((double)totalItems / itemsPerPage);

        queryable = queryWords.Aggregate(queryable, (current, word) => current.Where(x => x.Title.Contains(word)));

        var items = await queryable
            .Distinct()
            .OrderBy(x => x.Title)
            .Skip(itemsPerPage * (currentPage - 1))
            .Take(itemsPerPage)
            .AsNoTracking()
            .ProjectTo<ArticleLookupDto>(_mapper.ConfigurationProvider)
            .ToListAsync(cancellationToken);

        result.SetData(items, itemsPerPage, currentPage, items.Count, totalPages);

        return result;
    }
}
