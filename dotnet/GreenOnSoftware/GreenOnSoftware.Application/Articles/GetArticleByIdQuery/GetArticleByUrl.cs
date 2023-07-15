using GreenOnSoftware.Commons.Dtos;
using MediatR;

namespace GreenOnSoftware.Application.Articles.GetArticleByIdQuery;

public record GetArticleByUrl(string Url) : IRequest<Result<ArticleDto>>;
