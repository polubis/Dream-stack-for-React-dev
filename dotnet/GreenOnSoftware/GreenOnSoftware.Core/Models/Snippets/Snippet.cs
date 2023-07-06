namespace GreenOnSoftware.Core.Models.Snippets;

public class Snippet : Entity
{
    private Snippet()
    {
        
    }

    public Snippet(string name, string description, IList<SnippetFrame> frames, string? gifUrl, DateTime operationDate)
    {
        Id = Guid.NewGuid();
        Name = name;
        Description = description;
        Frames = frames;
        GifUrl = gifUrl;
        CreatedDate = operationDate;
    }

    public DateTime CreatedDate { get; private set; }

    public string Name { get; private set; }

    public string Description { get; private set; }

    public IList<SnippetFrame> Frames { get; private set; }

    public string? GifUrl { get; private set; }
}