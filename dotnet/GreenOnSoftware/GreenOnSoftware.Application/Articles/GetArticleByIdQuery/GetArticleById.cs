using GreenOnSoftware.Commons.Dtos;
using MediatR;

namespace GreenOnSoftware.Application.Articles.GetArticleByIdQuery;

public record GetArticleById(Guid Id) : IRequest<Result<ArticleDto>>;
