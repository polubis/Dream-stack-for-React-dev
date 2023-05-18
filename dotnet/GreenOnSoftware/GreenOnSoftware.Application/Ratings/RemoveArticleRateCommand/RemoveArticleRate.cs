using GreenOnSoftware.Commons.Dtos;
using MediatR;

namespace GreenOnSoftware.Application.Ratings.RemoveArticleRateCommand;

public record RemoveArticleRate(Guid ArticleId) : IRequest<Result>;
