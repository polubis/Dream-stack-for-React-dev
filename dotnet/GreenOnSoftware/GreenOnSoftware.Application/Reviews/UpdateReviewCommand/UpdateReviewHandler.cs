using GreenOnSoftware.Commons.Dtos;
using GreenOnSoftware.Commons.Clock;
using GreenOnSoftware.Commons.Resources;
using GreenOnSoftware.DataAccess;
using MediatR;
using Microsoft.EntityFrameworkCore;
using GreenOnSoftware.Commons.Context;

namespace GreenOnSoftware.Application.Reviews.UpdateReviewCommand;

internal class UpdateReviewHandler : IRequestHandler<UpdateReview, Result>
{
    private readonly GreenOnSoftwareDbContext _dbContext;
    private readonly IClock _clock;
    private readonly IContext _context;

    public UpdateReviewHandler(IClock clock, GreenOnSoftwareDbContext dbContext, IContext context)
    {
        _clock = clock;
        _dbContext = dbContext;
        _context = context;
    }

    public async Task<Result> Handle(UpdateReview command, CancellationToken cancellationToken)
    {
        var result = new Result();

        var currentArticle = await _dbContext.Articles
            .Include(x=>x.Reviews)
            .SingleOrDefaultAsync(x => !x.IsDeleted && x.Id == command.ArticleId);

        if (currentArticle is null)
        {
            result.AddErrorWithLogging(ErrorMessages.ArticleNotFound);
            return result;
        }

        currentArticle.UpdateReview(command.ReviewId, command.Content, _context.Identity.Id!, _clock.UtcNow);
        await _dbContext.SaveChangesAsync(cancellationToken);

        return result;
    }
}
