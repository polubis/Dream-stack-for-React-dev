using GreenOnSoftware.Commons.Dtos;
using GreenOnSoftware.Commons.Clock;
using GreenOnSoftware.Core.Models;
using GreenOnSoftware.DataAccess;
using MediatR;
using Microsoft.AspNetCore.Http;
using GreenOnSoftware.Application.Services.Interfaces;
using GreenOnSoftware.Application.Articles.AddArticleCommand;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using GreenOnSoftware.Commons.Context;

namespace GreenOnSoftware.Application.Articles.AddArticleCommand;

internal class AddArticleHandler : IRequestHandler<AddArticle, Result<Guid>>
{
    private readonly GreenOnSoftwareDbContext _dbContext;
    private readonly IClock _clock;
    private readonly IThumbnailService _thumbnailService;
    private readonly IContext _context;

    public AddArticleHandler(IClock clock, GreenOnSoftwareDbContext dbContext, IThumbnailService thumbnailService, IContext context)
    {
        _clock = clock;
        _dbContext = dbContext;
        _thumbnailService = thumbnailService;
        _context = context;
    }

    public async Task<Result<Guid>> Handle(AddArticle request, CancellationToken cancellationToken)
    {
        var result = new Result<Guid>();

        string? thumbnailUrl = null;

        if (request.Thumbnail != null)
        {
            var uploadPictureResult = await _thumbnailService.UploadPicture(request.Thumbnail);
            if (uploadPictureResult.HasErrors)
            {
                result.AddErrors(uploadPictureResult);
                return result;
            }

            thumbnailUrl = uploadPictureResult.Data;
        }

        var newArticle = new Article(request.Title, request.Description, request.Content, thumbnailUrl, request.Url, request.Lang, _context.Identity.Id!, _clock.UtcNow);

        _dbContext.Articles.Add(newArticle);
        await _dbContext.SaveChangesAsync();

        result.SetData(newArticle.Id);

        return result;
    }
}
