using GreenOnSoftware.Application.Dtos;
using GreenOnSoftware.Commons.Dtos;
using MediatR;

namespace GreenOnSoftware.Application.Reviews.GetAllReviewerReviewsQuery;

public record GetAllReviewerReviews() : IRequest<Result<IEnumerable<UserReviewLookupDto>>>;

