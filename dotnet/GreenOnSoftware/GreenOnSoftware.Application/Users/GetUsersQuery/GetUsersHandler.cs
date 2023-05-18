using AutoMapper;
using AutoMapper.QueryableExtensions;
using FluentValidation;
using GreenOnSoftware.Application.Articles.GetArticlesQuery;
using GreenOnSoftware.Commons.Context;
using GreenOnSoftware.Commons.Dtos;
using GreenOnSoftware.Commons.Extensions;
using GreenOnSoftware.Core.Identity;
using GreenOnSoftware.Core.Models;
using GreenOnSoftware.DataAccess;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace GreenOnSoftware.Application.Users.GetUsersQuery;

internal sealed class GetUsersHandler : IRequestHandler<GetUsers, PagedResult<UserLookupDto>>
{
    private readonly GreenOnSoftwareDbContext _dbContext;
    private readonly IMapper _mapper;
    private readonly IContext _context;

    public GetUsersHandler(GreenOnSoftwareDbContext dbContext, IMapper mapper, IContext context)
    {
        _dbContext = dbContext;
        _mapper = mapper;
        _context = context;
    }

    public async Task<PagedResult<UserLookupDto>> Handle(GetUsers query, CancellationToken cancellationToken)
    {
        var result = new PagedResult<UserLookupDto>();
        int itemsPerPage = query.ItemsPerPage ?? 20;
        int currentPage = query.CurrentPage ?? 1;
        var queryWords = query.Search?.Split(' ')
            .Select(x => x.Trim())
            .Where(x => !string.IsNullOrEmpty(x))
            .ToArray()
            ?? Array.Empty<string>();

        var roles = query.Roles?.ToArray();

        IQueryable<User> queryable = _dbContext.Users
            .Where(() => roles != null, x => x.Roles.Select(x=>x.Role.Name).Any(r=> roles!.Contains(r)));

        var totalItems = await queryable.CountAsync(cancellationToken);
        var totalPages = totalItems <= itemsPerPage ? 1 : (int)Math.Ceiling((double)totalItems / itemsPerPage);

        queryable = queryWords
            .Aggregate(queryable, (current, word) => current.Where(x => x.UserName.Contains(word)));

        var items = await queryable
            .Distinct()
            .OrderBy(x => x.UserName)
            .Skip(itemsPerPage * (currentPage - 1))
            .Take(itemsPerPage)
            .AsNoTracking()
            .ProjectTo<UserLookupDto>(_mapper.ConfigurationProvider)
            .ToListAsync(cancellationToken);

        result.SetData(items, itemsPerPage, currentPage, items.Count, totalPages);

        return result;
    }
}
