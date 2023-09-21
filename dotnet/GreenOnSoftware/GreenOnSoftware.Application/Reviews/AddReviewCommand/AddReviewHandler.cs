using GreenOnSoftware.Commons.Dtos;
using GreenOnSoftware.Commons.Clock;
using GreenOnSoftware.Commons.Resources;
using GreenOnSoftware.DataAccess;
using MediatR;
using Microsoft.EntityFrameworkCore;
using GreenOnSoftware.Commons.Context;
using GreenOnSoftware.Core.Models.Reviews;

namespace GreenOnSoftware.Application.Reviews.AddReviewCommand;

internal class AddReviewHandler : IRequestHandler<AddReview, Result>
{
    private readonly GreenOnSoftwareDbContext _dbContext;
    private readonly IClock _clock;
    private readonly IContext _context;

    public AddReviewHandler(IClock clock, GreenOnSoftwareDbContext dbContext, IContext context)
    {
        _clock = clock;
        _dbContext = dbContext;
        _context = context;
    }

    public async Task<Result> Handle(AddReview command, CancellationToken cancellationToken)
    {
        var result = new Result<AddReviewResult>();

        var currentArticle = await _dbContext.Articles
            .Include(x=>x.Reviews)
            .SingleOrDefaultAsync(x => !x.IsDeleted && x.Id == command.ArticleId);

        if (currentArticle is null)
        {
            result.AddErrorWithLogging(ErrorMessages.ArticleNotFound);
            return result;
        }

        Review review = currentArticle.AddReview(command.Content, _context.Identity.Id!, _clock.UtcNow);
        await _dbContext.SaveChangesAsync(cancellationToken);

        result.SetData(new AddReviewResult {
            Id = review.Id
        });

        return result;
    }
}
