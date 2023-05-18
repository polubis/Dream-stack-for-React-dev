using GreenOnSoftware.Commons.Dtos;
using GreenOnSoftware.Commons.Clock;
using GreenOnSoftware.Commons.Resources;
using GreenOnSoftware.DataAccess;
using MediatR;
using Microsoft.EntityFrameworkCore;
using GreenOnSoftware.Commons.Context;

namespace GreenOnSoftware.Application.Articles.SendForApprovalCommand;

internal class SendForApprovalHandler : IRequestHandler<SendForApproval, Result>
{
    private readonly GreenOnSoftwareDbContext _dbContext;
    private readonly IContext _context;

    public SendForApprovalHandler(GreenOnSoftwareDbContext dbContext, IContext context)
    {
        _dbContext = dbContext;
        _context = context;
    }

    public async Task<Result> Handle(SendForApproval command, CancellationToken cancellationToken)
    {
        var result = new Result();

        var currentArticle = await _dbContext.Articles.FirstOrDefaultAsync(x => !x.IsDeleted && x.Id == command.Id);

        if (currentArticle is null)
        {
            result.AddErrorWithLogging(ErrorMessages.ArticleNotFound);
            return result;
        }

        if (currentArticle.AuthorId != _context.Identity.Id)
        {
            result.AddError(ErrorMessages.Forbidden);
            return result;
        }

        currentArticle.SendForApproval();

        await _dbContext.SaveChangesAsync(cancellationToken);

        return result;
    }
}
