using GreenOnSoftware.Commons.Dtos;
using GreenOnSoftware.Core.Enums;
using MediatR;

namespace GreenOnSoftware.Application.Articles.GetArticleByIdQuery;

public record GetArticleByUrl(Language Lang, string UrlIdentifier) : IRequest<Result<ArticleDto>>;
