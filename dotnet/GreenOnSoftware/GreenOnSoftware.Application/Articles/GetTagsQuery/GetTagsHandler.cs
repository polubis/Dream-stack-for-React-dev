using GreenOnSoftware.Commons.Context;
using GreenOnSoftware.Commons.Dtos;
using GreenOnSoftware.Commons.Extensions;
using GreenOnSoftware.Core.Enums;
using GreenOnSoftware.DataAccess;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace GreenOnSoftware.Application.Articles.GetTagsQuery;

public sealed class GetTagsHandler : IRequestHandler<GetTags, Result>
{
    private readonly IContext _context;
    private readonly GreenOnSoftwareDbContext _dbContext;

    public GetTagsHandler(IContext context, GreenOnSoftwareDbContext dbContext)
    {
        _context = context;
        _dbContext = dbContext;
    }

    public async Task<Result> Handle(GetTags request, CancellationToken cancellationToken)
    {
        var result = new Result<IEnumerable<string>>();
        var isAnnonymous = !_context.Identity.IsAuthenticated;
        var isGeneralUser = _context.Identity.IsGeneralUser;
        var isAdminOrContentEditor = _context.Identity.IsAdmin || _context.Identity.IsContentEditor;

        var tags = await _dbContext.Tags
            .Where(x => x.Articles.Any(a => !a.IsDeleted))
            .Where(() => isAnnonymous, x => x.Articles.Any(a => a.Status == Status.Accepted))
            .Where(() => isGeneralUser, x => x.Articles.Any(a => a.Status == Status.Accepted || a.AuthorId == _context.Identity.Id))
            .Where(() => isAdminOrContentEditor, x => x.Articles.Any(a => a.Status != Status.Draft || a.AuthorId == _context.Identity.Id))
            .Select(x=>x.Name)
            .ToListAsync();

        result.SetData(tags);

        return result;
    }
}
