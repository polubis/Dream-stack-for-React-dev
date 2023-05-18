using GreenOnSoftware.Commons.Dtos;
using GreenOnSoftware.Commons.Clock;
using GreenOnSoftware.Commons.Resources;
using GreenOnSoftware.DataAccess;
using MediatR;
using Microsoft.EntityFrameworkCore;
using GreenOnSoftware.Application.Articles.AcceptArticleCommand;

namespace GreenOnSoftware.Application.Articles.AcceptArticleCommand;

internal class AcceptArticleHandler : IRequestHandler<AcceptArticle, Result>
{
    private readonly GreenOnSoftwareDbContext _context;
    private readonly IClock _clock;

    public AcceptArticleHandler(IClock clock, GreenOnSoftwareDbContext context)
    {
        _clock = clock;
        _context = context;
    }

    public async Task<Result> Handle(AcceptArticle command, CancellationToken cancellationToken)
    {
        var result = new Result();

        var currentArticle = await _context.Articles.FirstOrDefaultAsync(x => !x.IsDeleted && x.Id == command.Id);

        if (currentArticle is null)
        {
            result.AddErrorWithLogging(ErrorMessages.ArticleNotFound);
            return result;
        }

        currentArticle.Accept();

        await _context.SaveChangesAsync(cancellationToken);

        return result;
    }
}
