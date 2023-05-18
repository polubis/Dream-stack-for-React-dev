using GreenOnSoftware.Commons.Dtos;
using MediatR;

namespace GreenOnSoftware.Application.Articles.DeleteArticleCommand;

public record DeleteArticle(Guid Id) : IRequest<Result>;
