using GreenOnSoftware.Commons.Context;
using GreenOnSoftware.Commons.Dtos;
using GreenOnSoftware.Commons.Resources;
using GreenOnSoftware.DataAccess;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace GreenOnSoftware.Application.Reviews.DeleteReviewCommand;

internal class DeleteReviewHandler : IRequestHandler<DeleteReview, Result>
{
    private readonly GreenOnSoftwareDbContext _dbContext;
    private readonly IContext _context;

    public DeleteReviewHandler(GreenOnSoftwareDbContext dbContext, IContext context)
    {
        _dbContext = dbContext;
        _context = context;
    }

    public async Task<Result> Handle(DeleteReview command, CancellationToken cancellationToken)
    {
        var result = new Result();

        var currentArticle = await _dbContext.Articles
            .Include(x => x.Reviews)
            .SingleOrDefaultAsync(x => !x.IsDeleted && x.Id == command.ArticleId);

        if (currentArticle is null)
        {
            result.AddErrorWithLogging(ErrorMessages.ArticleNotFound);
            return result;
        }

        currentArticle.DeleteReview(command.ReviewId, _context.Identity.Id!);
        await _dbContext.SaveChangesAsync(cancellationToken);

        return result;
    }
}
