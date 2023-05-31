namespace GreenOnSoftware.Application.Snippets.GetSnippetByIdQuery;

public class SnippetDto
{
    public Guid Id { get; set; }

    public string Name { get; set; }

    public string Description { get; set; }

    public IList<SnippetFrameDto> Frames { get; set; }

    public string GifUrl { get; private set; }

    public class SnippetFrameDto
    {
        public string Code { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }

        public SnippetFrameAnimationDto Animation { get; set; }

    }

    public class SnippetFrameAnimationDto
    {
        public string Type { get; set; }
        public int DisplayTime { get; set; }
    }
}


