using GreenOnSoftware.Commons.Dtos;
using GreenOnSoftware.Core.Enums;
using GreenOnSoftware.Core.Models.Snippets;
using GreenOnSoftware.DataAccess;
using MediatR;

namespace GreenOnSoftware.Application.Snippets.AddSnippetCommand;

internal sealed class AddSnippetHandler : IRequestHandler<AddSnippet, Result>
{
    private readonly GreenOnSoftwareDbContext _dbContext;

    public AddSnippetHandler(GreenOnSoftwareDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<Result> Handle(AddSnippet command, CancellationToken cancellationToken)
    {
        var result = new Result<Guid>();

        var newSnippet = new Snippet(
            command.Name,
            command.Description,
            command.Frames
                .Select(x => new SnippetFrame(
                    x.Code,
                    x.Name,
                    x.Description,
                    Enum.Parse<SnippetFrameAnimationType>(x.Animation.Type, ignoreCase: true),
                    x.Animation.DisplayTime))
                .ToList(),
            command.GifUrl);

        result.SetData(newSnippet.Id);

        await _dbContext.Set<Snippet>().AddAsync(newSnippet);
        await _dbContext.SaveChangesAsync();

        return result;
    }
}
