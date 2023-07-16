﻿using GreenOnSoftware.Commons.Dtos;
using GreenOnSoftware.Commons.Clock;
using GreenOnSoftware.Commons.Resources;
using GreenOnSoftware.DataAccess;
using MediatR;
using Microsoft.EntityFrameworkCore;
using GreenOnSoftware.Application.Services.Interfaces;
using GreenOnSoftware.Commons.Context;
using GreenOnSoftware.Core.Models;

namespace GreenOnSoftware.Application.Articles.UpdateArticleCommand;

internal sealed class UpdateArticleHandler : IRequestHandler<UpdateArticle, Result>
{
    private readonly GreenOnSoftwareDbContext _dbContext;
    private readonly IClock _clock;
    private readonly IThumbnailService _thumbnailService;
    private readonly IBlobStorageService _blobStorageService;
    private readonly IContext _context;
    private readonly IArticleUrlIdentifierService _articleUrlIdentifierService;

    public UpdateArticleHandler(IClock clock, GreenOnSoftwareDbContext dbContext, IBlobStorageService blobStorageService, IThumbnailService thumbnailService, IContext context, IArticleUrlIdentifierService articleUrlIdentifierService)
    {
        _clock = clock;
        _blobStorageService = blobStorageService;
        _thumbnailService = thumbnailService;
        _dbContext = dbContext;
        _context = context;
        _articleUrlIdentifierService = articleUrlIdentifierService;
    }

    public async Task<Result> Handle(UpdateArticle command, CancellationToken cancellationToken)
    {
        var result = new Result<string>();

        Article? currentArticle = await _dbContext.Articles
            .FirstOrDefaultAsync(x => !x.IsDeleted && x.Url == command.UrlIdentifier, cancellationToken);

        if (currentArticle is null)
        {
            result.AddErrorWithLogging(ErrorMessages.ArticleNotFound);
            return result;
        }

        string url = _articleUrlIdentifierService.CreateArticleUrlIdentifier(command.Title);
        bool urlIdentifierExists = await _dbContext.Articles
            .AnyAsync(x => x.Url != command.UrlIdentifier
                && (x.Title == command.Title || x.Url == url), cancellationToken);

        if (urlIdentifierExists)
        {
            result.AddError(ErrorMessages.ArticleAlreadyExists);

            return result;
        }

        if (!_context.Identity.IsAdmin && currentArticle.AuthorId != _context.Identity.Id)
        {
            result.AddError(ErrorMessages.Forbidden);
            return result;
        }

        string? thumbnailUrl = null;

        if (command.Thumbnail is not null)
        {
            if (currentArticle.ThumbnailUrl is not null)
            {
                var removePictureResult = await _blobStorageService.RemovePictureFromStorageAsync(currentArticle.ThumbnailUrl);
                if (removePictureResult.HasErrors)
                {
                    result.AddErrors(removePictureResult);
                }
            }

            Result<string> uploadPictureResult = 
                await _thumbnailService.UploadPicture(command.Thumbnail);

            if (uploadPictureResult.HasErrors)
            {
                result.AddErrors(uploadPictureResult);
                return result;
            }

            thumbnailUrl = uploadPictureResult.Data;
        }

        currentArticle.Update(
            command.Title,
            command.Description,
            command.Content,
            thumbnailUrl,
            url,
            command.Lang,
            _clock.UtcNow);

        await _dbContext.SaveChangesAsync(cancellationToken);

        result.SetData(url);

        return result;
    }
}
