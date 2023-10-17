using GreenOnSoftware.Commons.Dtos;
using GreenOnSoftware.Commons.Clock;
using GreenOnSoftware.Commons.Resources;
using GreenOnSoftware.DataAccess;
using MediatR;
using Microsoft.EntityFrameworkCore;
using GreenOnSoftware.Application.Services.Interfaces;
using GreenOnSoftware.Commons.Context;
using GreenOnSoftware.Core.Models;
using GreenOnSoftware.Core.Enums;

namespace GreenOnSoftware.Application.Articles.UpdateArticleCommand;

internal sealed class UpdateArticleHandler : IRequestHandler<UpdateArticle, Result>
{
    private readonly GreenOnSoftwareDbContext _dbContext;
    private readonly IClock _clock;
    private readonly IThumbnailService _thumbnailService;
    private readonly IBlobStorageService _blobStorageService;
    private readonly IContext _context;
    private readonly IArticleUrlIdentifierService _articleUrlIdentifierService;
    private readonly ITagsService _tagsService;

    public UpdateArticleHandler(IClock clock, GreenOnSoftwareDbContext dbContext, IBlobStorageService blobStorageService, IThumbnailService thumbnailService, IContext context, IArticleUrlIdentifierService articleUrlIdentifierService, ITagsService tagsService)
    {
        _clock = clock;
        _blobStorageService = blobStorageService;
        _thumbnailService = thumbnailService;
        _dbContext = dbContext;
        _context = context;
        _articleUrlIdentifierService = articleUrlIdentifierService;
        _tagsService = tagsService;
    }

    public async Task<Result> Handle(UpdateArticle command, CancellationToken cancellationToken)
    {
        var result = new Result<UpdateArticleResult>();

        if(command.UrlIdentifier.Length > 300)
        {
            result.AddError("Too long url identifier");

            return result;
        }

        Language destLang = Enum.Parse<Language>(command.Lang, ignoreCase: true);

        var queryResult = await _dbContext.Articles
            .Include(x => x.Tags)
            .Where(x => !x.IsDeleted && x.Lang == command.CurrentLang && x.Url == command.UrlIdentifier)
            .Select(article => new { article, tags = article.Tags.Select(t => new { t.Id, t.Articles.Count }) })
            .FirstOrDefaultAsync();

        Article? currentArticle = queryResult?.article;

        if (currentArticle is null)
        {
            result.AddErrorWithLogging(ErrorMessages.ArticleNotFound);
            return result;
        }

        string url = _articleUrlIdentifierService.CreateArticleUrlIdentifier(command.Title);
        bool urlIdentifierExists = await _dbContext.Articles
            .AnyAsync(x => !x.IsDeleted && !(x.Url == command.UrlIdentifier && x.Lang == command.CurrentLang)
                && (x.Title == command.Title || x.Url == url) && x.Lang == destLang, cancellationToken);

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

            currentArticle.UpdateThumbnail(uploadPictureResult.Data);
        }

        currentArticle.Update(
            command.Title,
            command.Description,
            command.Content,
            url,
            destLang,
            _clock.UtcNow);

        List<Tag> tags = await _tagsService.ConvertToValidTagsAsync(command.Tags);
        IEnumerable<Tag> tagsToRemove = currentArticle.UpdateTags(tags);
        tagsToRemove = tagsToRemove.Where(x => queryResult!.tags.Any(y => y.Id == x.Id && y.Count == 1)).ToList();

        _dbContext.Tags.RemoveRange(tagsToRemove);
        await _dbContext.SaveChangesAsync(cancellationToken);

        result.SetData(new UpdateArticleResult {
            Id = currentArticle.Id,
            Url = currentArticle.Url
        });

        return result;
    }
}
