using GreenOnSoftware.Commons.Clock;
using GreenOnSoftware.Commons.Dtos;
using MediatR;

namespace GreenOnSoftware.Application.Ratings.GetArticleRatingQuery;

public record GetArticleRatings(Guid Id) : IRequest<Result<RatingsDto>>;

