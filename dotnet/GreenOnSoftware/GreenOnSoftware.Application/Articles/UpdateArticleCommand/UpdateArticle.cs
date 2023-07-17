using GreenOnSoftware.Commons.Dtos;
using GreenOnSoftware.Core.Enums;
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
    internal Language CurrentLang { get; private set; }

    public UpdateArticle Bind(Language lang, string urlIdentifier)
    {
        UrlIdentifier = urlIdentifier;
        CurrentLang = lang;

        return this;
    }
}
