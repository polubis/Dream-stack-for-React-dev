using AutoMapper;
using GreenOnSoftware.Commons.Context;
using GreenOnSoftware.Commons.Dtos;
using GreenOnSoftware.Commons.Extensions;
using GreenOnSoftware.Commons.Resources;
using GreenOnSoftware.Core.Enums;
using GreenOnSoftware.DataAccess;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace GreenOnSoftware.Application.Articles.GetArticleByIdQuery;

internal class GetArticleByIdHandler : IRequestHandler<GetArticleById, Result<ArticleDto>>
{
    private readonly GreenOnSoftwareDbContext _dbContext;
    private readonly IMapper _mapper;
    private readonly IContext _context;

    public GetArticleByIdHandler(GreenOnSoftwareDbContext dbContext, IMapper mapper, IContext context)
    {
        _dbContext = dbContext;
        _mapper = mapper;
        _context = context;
    }

    public async Task<Result<ArticleDto>> Handle(GetArticleById query, CancellationToken cancellationToken)
    {
        var result = new Result<ArticleDto>();

        var isAnnonymous = !_context.Identity.IsAuthenticated;
        var isGeneralUser = _context.Identity.IsGeneralUser;
        var isAdminOrContentEditor = _context.Identity.IsAdmin || _context.Identity.IsContentEditor;

        var article = await _dbContext.Articles
            .Include(x=>x.Author)
            .Where(() => isAnnonymous, x => x.Status == Status.Accepted)
            .Where(() => isGeneralUser, x => x.Status == Status.Accepted || x.AuthorId == _context.Identity.Id)
            .Where(() => isAdminOrContentEditor, x => x.Status != Status.Draft || x.AuthorId == _context.Identity.Id)
            .SingleOrDefaultAsync(x => x.Id == query.Id);

        if (article is null)
        {
            result.AddErrorWithLogging(ErrorMessages.ArticleNotFound);
            return result;
        }

        result.SetData(_mapper.Map<ArticleDto>(article));

        return result;
    }
}
