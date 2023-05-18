using GreenOnSoftware.Commons.Dtos;
using MediatR;

namespace GreenOnSoftware.Application.Articles.AcceptArticleCommand;

public record AcceptArticle(Guid Id) : IRequest<Result>;
