using GreenOnSoftware.Application.Dtos;
using GreenOnSoftware.Commons.Dtos;
using MediatR;

namespace GreenOnSoftware.Application.Reviews.GetReviewsQuery;

public record GetReviews(Guid ArticleId) : IRequest<Result<IEnumerable<ReviewLookupDto>>>;

