using AutoMapper;
using GreenOnSoftware.Application.Dtos;
using GreenOnSoftware.Commons.Context;
using GreenOnSoftware.Commons.Dtos;
using GreenOnSoftware.Commons.Resources;
using GreenOnSoftware.DataAccess;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace GreenOnSoftware.Application.Reviews.GetReviewsQuery;

internal class GetReviewsHandler : IRequestHandler<GetReviews, Result<IEnumerable<ReviewDto>>>
{
    private readonly GreenOnSoftwareDbContext _dbContext;
    private readonly IContext _context;
    private readonly IMapper _mapper;

    public GetReviewsHandler(GreenOnSoftwareDbContext dbContext, IContext context, IMapper mapper)
    {
        _dbContext = dbContext;
        _context = context;
        _mapper = mapper;
    }

    public async Task<Result<IEnumerable<ReviewDto>>> Handle(GetReviews query, CancellationToken cancellationToken)
    {
        var result = new Result<IEnumerable<ReviewDto>>();

        var article = await _dbContext.Articles
            .AsNoTracking()
            .Include(x => x.Reviews)
            .ThenInclude(x => x.Reviewer)
            .SingleOrDefaultAsync(x => !x.IsDeleted && x.Id == query.ArticleId, cancellationToken);

        if (article is null)
        {
            result.AddErrorWithLogging(ErrorMessages.ArticleNotFound);
            return result;
        }

        if (article.AuthorId != _context.Identity.Id && _context.Identity.IsGeneralUser)
        {
            result.AddError(ErrorMessages.Forbidden);
            return result;
        }

        var reviews = _mapper.Map<IEnumerable<ReviewDto>>(article.GetReviews());

        result.SetData(reviews);

        return result;
    }
}

