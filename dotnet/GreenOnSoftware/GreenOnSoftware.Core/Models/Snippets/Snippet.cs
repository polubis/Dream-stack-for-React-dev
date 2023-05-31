using Newtonsoft.Json;

namespace GreenOnSoftware.Core.Models.Snippets;

public class Snippet : Entity
{
    public string Name { get; private set; }

    public string Description { get; private set; }

    public IList<SnippetFrame> Frames { get; private set; }

    public string GifUrl { get; private set; }
}