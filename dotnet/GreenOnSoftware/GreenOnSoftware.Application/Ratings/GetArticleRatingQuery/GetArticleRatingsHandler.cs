using GreenOnSoftware.Application.Services.Interfaces;
using GreenOnSoftware.Commons.Context;
using GreenOnSoftware.Commons.Dtos;
using GreenOnSoftware.Commons.Resources;
using GreenOnSoftware.DataAccess;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace GreenOnSoftware.Application.Ratings.GetArticleRatingQuery;

internal class GetArticleRatingsHandler : IRequestHandler<GetArticleRatings, Result<RatingsDto>>
{
    private readonly GreenOnSoftwareDbContext _dbContext;
    private readonly IContext _context;
    private readonly IRatingsSessionService _ratingsSessionService;

    public GetArticleRatingsHandler(GreenOnSoftwareDbContext dbContext, IContext context, IRatingsSessionService ratingsSessionService)
    {
        _dbContext = dbContext;
        _context = context;
        _ratingsSessionService = ratingsSessionService;
    }

    public async Task<Result<RatingsDto>> Handle(GetArticleRatings command, CancellationToken cancellationToken)
    {
        var result = new Result<RatingsDto>();

        var article = await _dbContext.Articles
            .Include(x => x.Rates)
            .Include(x => x.AnnonymousRates)
            .SingleOrDefaultAsync(x => !x.IsDeleted && x.Id == command.Id, cancellationToken);

        if (article is null)
        {
            result.AddErrorWithLogging(ErrorMessages.ArticleNotFound);
            return result;
        }

        var (currentUserRateAvatar, currentUserRateValue) = article.GetCurrentUserRating(_context.Identity.Id!);

        var ratings = new RatingsDto(article.GetAverageRatingsByAvatars(), article.GetAverageRating(), currentUserRateAvatar, currentUserRateValue);

        result.SetData(ratings);

        if(_context.Identity.AvatarName is null && currentUserRateAvatar is not null)
        {
            _ratingsSessionService.SetAvatarName(currentUserRateAvatar);
        }

        return result;
    }
}

