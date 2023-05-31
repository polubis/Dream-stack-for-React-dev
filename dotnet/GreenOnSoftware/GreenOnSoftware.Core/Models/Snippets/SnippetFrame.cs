using Newtonsoft.Json;

namespace GreenOnSoftware.Core.Models.Snippets;

public class SnippetFrame
{
    public string Code { get; private set; }
    public string? Name { get; private set; }
    public string? Description { get; private set; }
    public SnippetFrameAnimation Animation { get; private set; }
}
