using GreenOnSoftware.Commons.Dtos;
using MediatR;

namespace GreenOnSoftware.Application.Reviews.DeleteReviewCommand;

public record DeleteReview(Guid ArticleId, Guid ReviewId) : IRequest<Result>;
