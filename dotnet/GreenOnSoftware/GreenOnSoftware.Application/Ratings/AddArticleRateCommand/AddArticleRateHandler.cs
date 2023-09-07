using GreenOnSoftware.Commons.Dtos;
using GreenOnSoftware.Commons.Clock;
using GreenOnSoftware.Commons.Resources;
using GreenOnSoftware.DataAccess;
using MediatR;
using Microsoft.EntityFrameworkCore;
using GreenOnSoftware.Commons.Context;
using GreenOnSoftware.Application.Reviews.AddReviewCommand;

namespace GreenOnSoftware.Application.Ratings.AddArticleRateCommand;

internal class AddArticleRateHandler : IRequestHandler<AddArticleRate, Result>
{
    private readonly GreenOnSoftwareDbContext _dbContext;
    private readonly IClock _clock;
    private readonly IContext _context;

    public AddArticleRateHandler(IClock clock, GreenOnSoftwareDbContext dbContext, IContext context)
    {
        _clock = clock;
        _dbContext = dbContext;
        _context = context;
    }

    public async Task<Result> Handle(AddArticleRate command, CancellationToken cancellationToken)
    {
        var result = new Result();

        var currentArticle = await _dbContext.Articles
            .Include(x=>x.Author)
            .Include(x=>x.Rates)
            .Include(x=>x.AnnonymousRates)
            .SingleOrDefaultAsync(x => !x.IsDeleted && x.Id == command.ArticleId);

        if (currentArticle is null)
        {
            result.AddErrorWithLogging(ErrorMessages.ArticleNotFound);
            return result;
        }

        if(_context.Identity.AvatarName is null)
        {
            result.AddErrorWithLogging(ErrorMessages.AvatarNameIsRequired);
            return result;
        }

        currentArticle.AddRate(_context.Identity.Id!, command.Value, _context.Identity.AvatarName, _clock.UtcNow, _context.Identity.IsAuthenticated);
        await _dbContext.SaveChangesAsync(cancellationToken);

        return result;
    }
}
