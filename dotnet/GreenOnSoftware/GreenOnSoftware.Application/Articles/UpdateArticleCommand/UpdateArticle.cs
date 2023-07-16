using GreenOnSoftware.Commons.Dtos;
using MediatR;
using Microsoft.AspNetCore.Http;

namespace GreenOnSoftware.Application.Articles.UpdateArticleCommand;

public record UpdateArticle(
    string Title, 
    string? Description,
    string Content,
    IFormFile? Thumbnail, 
    string Lang) : IRequest<Result>
{
    internal string UrlIdentifier { get; private set; }

    public UpdateArticle BindId(string urlIdentifier)
    {
        UrlIdentifier = urlIdentifier;

        return this;
    }
}
