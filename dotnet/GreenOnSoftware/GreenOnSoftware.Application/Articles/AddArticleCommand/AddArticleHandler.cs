using GreenOnSoftware.Commons.Dtos;
using GreenOnSoftware.Commons.Clock;
using GreenOnSoftware.Core.Models;
using GreenOnSoftware.DataAccess;
using MediatR;
using GreenOnSoftware.Application.Services.Interfaces;
using GreenOnSoftware.Commons.Context;
using Microsoft.EntityFrameworkCore;
using GreenOnSoftware.Commons.Resources;
using GreenOnSoftware.Core.Enums;

namespace GreenOnSoftware.Application.Articles.AddArticleCommand;

internal class AddArticleHandler : IRequestHandler<AddArticle, Result>
{
    private readonly GreenOnSoftwareDbContext _dbContext;
    private readonly IClock _clock;
    private readonly IThumbnailService _thumbnailService;
    private readonly IContext _context;
    private readonly IArticleUrlIdentifierService _articleUrlIdentifierService;

    public AddArticleHandler(IClock clock, GreenOnSoftwareDbContext dbContext, IThumbnailService thumbnailService,
        IContext context, IArticleUrlIdentifierService articleUrlIdentifierService)
    {
        _clock = clock;
        _dbContext = dbContext;
        _thumbnailService = thumbnailService;
        _context = context;
        _articleUrlIdentifierService = articleUrlIdentifierService;
    }

    public async Task<Result> Handle(AddArticle command, CancellationToken cancellationToken)
    {
        var result = new Result<string>();
        string url = _articleUrlIdentifierService.CreateArticleUrlIdentifier(command.Title);
        Language lang = Enum.Parse<Language>(command.Lang, ignoreCase: true);
        bool urlIdentifierExists = await _dbContext.Articles
            .AnyAsync(x => !x.IsDeleted && x.Lang == lang && (x.Title == command.Title || x.Url == url), cancellationToken);

        if(urlIdentifierExists)
        {
            result.AddError(ErrorMessages.ArticleAlreadyExists);

            return result;
        }

        string? thumbnailUrl = null;

        if (command.Thumbnail != null)
        {
            var uploadPictureResult = await _thumbnailService.UploadPicture(command.Thumbnail);
            if (uploadPictureResult.HasErrors)
            {
                result.AddErrors(uploadPictureResult);
                return result;
            }

            thumbnailUrl = uploadPictureResult.Data;
        }

        var newArticle = new Article(
            command.Title,
            command.Description,
            command.Content,
            thumbnailUrl,
            url,
            lang,
            _context.Identity.Id!,
            _clock.UtcNow);

        await _dbContext.Articles.AddAsync(newArticle);
        await _dbContext.SaveChangesAsync();

        result.SetData(newArticle.Url);

        return result;
    }
}
