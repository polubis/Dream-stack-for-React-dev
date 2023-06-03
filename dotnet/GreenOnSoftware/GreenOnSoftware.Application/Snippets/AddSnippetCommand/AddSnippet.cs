using GreenOnSoftware.Application.Articles.UpdateArticleCommand;
using GreenOnSoftware.Commons.Dtos;
using MediatR;

namespace GreenOnSoftware.Application.Snippets.AddSnippetCommand;

public record AddSnippet(string Name, string Description, IList<AddSnippet.SnippetFrame> Frames, string? GifUrl): IRequest<Result>
{
    public record SnippetFrame(string Code, string? Name, string? Description, SnippetFrame.SnippetFrameAnimation Animation)
    {
        public record SnippetFrameAnimation(string Type, int DisplayTime)
        {

        }
    }
}