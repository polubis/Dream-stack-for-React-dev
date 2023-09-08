using GreenOnSoftware.Commons.Dtos;
using GreenOnSoftware.Commons.Resources;
using GreenOnSoftware.DataAccess;
using MediatR;
using Microsoft.EntityFrameworkCore;
using GreenOnSoftware.Commons.Context;

namespace GreenOnSoftware.Application.Ratings.RemoveArticleRateCommand;

internal class RemoveArticleRateHandler : IRequestHandler<RemoveArticleRate, Result>
{
    private readonly GreenOnSoftwareDbContext _dbContext;
    private readonly IContext _context;

    public RemoveArticleRateHandler(GreenOnSoftwareDbContext dbContext, IContext context)
    {
        _dbContext = dbContext;
        _context = context;
    }

    public async Task<Result> Handle(RemoveArticleRate command, CancellationToken cancellationToken)
    {
        var result = new Result();

        var currentArticle = await _dbContext.Articles
            .Include(x => x.Author)
            .Include(x => x.Rates)
            .Include(x => x.AnnonymousRates)
            .SingleOrDefaultAsync(x => !x.IsDeleted && x.Id == command.ArticleId);

        if (currentArticle is null)
        {
            result.AddErrorWithLogging(ErrorMessages.ArticleNotFound);
            return result;
        }

        currentArticle.RemoveRate(_context.Identity.Id!, _context.Identity.IsAuthenticated);

        await _dbContext.SaveChangesAsync(cancellationToken);

        return result;
    }
}
