using GreenOnSoftware.Application.Dtos;
using GreenOnSoftware.Commons.Dtos;
using MediatR;

namespace GreenOnSoftware.Application.Reviews.GetReviewByIdQuery;

public record GetReviewById(Guid ArticleId, Guid ReviewId) : IRequest<Result<ReviewDto>>;

