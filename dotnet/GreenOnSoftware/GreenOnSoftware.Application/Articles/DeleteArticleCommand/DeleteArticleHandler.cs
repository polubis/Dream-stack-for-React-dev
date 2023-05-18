using GreenOnSoftware.Commons.Dtos;
using GreenOnSoftware.Commons.Extensions;
using GreenOnSoftware.Commons.Resources;
using GreenOnSoftware.DataAccess;
using MediatR;
using Microsoft.EntityFrameworkCore;
using GreenOnSoftware.Application.Services.Interfaces;
using GreenOnSoftware.Commons.Context;
using GreenOnSoftware.Core.Models;

namespace GreenOnSoftware.Application.Articles.DeleteArticleCommand;

internal class DeleteArticleHandler : IRequestHandler<DeleteArticle, Result>
{
    private readonly GreenOnSoftwareDbContext _dbContext;
    private readonly IContext _context;
    private readonly IBlobStorageService _blobStorageService;

    public DeleteArticleHandler(GreenOnSoftwareDbContext dbContext, IBlobStorageService blobStorageService, IContext context)
    {
        _dbContext = dbContext;
        _blobStorageService = blobStorageService;
        _context = context;
    }

    public async Task<Result> Handle(DeleteArticle command, CancellationToken cancellationToken)
    {
        var result = new Result();

        var currentArticle = await _dbContext.Articles
            .FirstOrDefaultAsync(x => !x.IsDeleted && x.Id == command.Id);

        if (currentArticle is null)
        {
            result.AddErrorWithLogging(ErrorMessages.ArticleNotFound);
            return result;
        }

        if (!_context.Identity.IsAdmin
            && (currentArticle.AuthorId != _context.Identity.Id 
                || currentArticle.Status != Status.Draft
                && currentArticle.Status != Status.NeedWork))
        {
            result.AddErrorWithLogging(ErrorMessages.Forbidden);
            return result;
        }

        currentArticle.Delete();

        await _dbContext.SaveChangesAsync(cancellationToken);

        return result;
    }
}
