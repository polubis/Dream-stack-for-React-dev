using GreenOnSoftware.Commons.Dtos;
using MediatR;

namespace GreenOnSoftware.Application.Articles.RejectArticleCommand;

public record RejectArticle(Guid Id) : IRequest<Result>;
