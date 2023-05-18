using GreenOnSoftware.Application.Reviews.AddReviewCommand;
using GreenOnSoftware.Commons.Dtos;
using GreenOnSoftware.Core.Models;
using MediatR;
using Microsoft.AspNetCore.Http;

namespace GreenOnSoftware.Application.Articles.UpdateArticleCommand;

public record UpdateArticle(string Title, string? Description, string Content, IFormFile? Thumbnail, string Url) : IRequest<Result>
{
    internal Guid Id { get; private set; }

    public UpdateArticle BindId(Guid id)
    {
        Id = id;

        return this;
    }
}
