using AutoMapper;
using AutoMapper.QueryableExtensions;
using GreenOnSoftware.Application.Dtos;
using GreenOnSoftware.Commons.Context;
using GreenOnSoftware.Commons.Dtos;
using GreenOnSoftware.Commons.Resources;
using GreenOnSoftware.DataAccess;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace GreenOnSoftware.Application.Reviews.GetAllReviewerReviewsQuery;

internal class GetAllReviewerReviewsHandler : IRequestHandler<GetAllReviewerReviews, Result<IEnumerable<UserReviewLookupDto>>>
{
    private readonly GreenOnSoftwareDbContext _dbContext;
    private readonly IContext _context;
    private readonly IMapper _mapper;

    public GetAllReviewerReviewsHandler(GreenOnSoftwareDbContext dbContext, IContext context, IMapper mapper)
    {
        _dbContext = dbContext;
        _context = context;
        _mapper = mapper;
    }

    public async Task<Result<IEnumerable<UserReviewLookupDto>>> Handle(GetAllReviewerReviews query, CancellationToken cancellationToken)
    {
        var result = new Result<IEnumerable<UserReviewLookupDto>>();
        var userId = _context.Identity.Id;

        var reviews = await _dbContext.Reviews
            .AsNoTracking()
            .Include(x=>x.Reviewer)
            .Include(x => x.Article)
            .ThenInclude(x => x.Author)
            .Where(x => !x.Article.IsDeleted && x.ReviewerId == userId)
            .ProjectTo<UserReviewLookupDto>(_mapper.ConfigurationProvider)
            .ToListAsync(cancellationToken);

        result.SetData(reviews);

        return result;
    }
}

