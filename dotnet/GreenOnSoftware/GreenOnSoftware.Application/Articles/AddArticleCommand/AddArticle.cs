using GreenOnSoftware.Commons.Dtos;
using MediatR;
using Microsoft.AspNetCore.Http;

namespace GreenOnSoftware.Application.Articles.AddArticleCommand;

public record AddArticle(string Title, string? Description, string Content, IFormFile? Thumbnail, string Url, string Lang) : IRequest<Result<Guid>>;
