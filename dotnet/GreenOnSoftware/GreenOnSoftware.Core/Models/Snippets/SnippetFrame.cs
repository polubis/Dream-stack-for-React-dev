using GreenOnSoftware.Core.Enums;
using Newtonsoft.Json;

namespace GreenOnSoftware.Core.Models.Snippets;

public class SnippetFrame
{
    private SnippetFrame()
    {
        
    }

    public SnippetFrame(string code, string? name, string? description, SnippetFrameAnimationType animationType, int animationDisplayTime)
    {
        Code = code;
        Name = name;
        Description = description;
        AnimationType = animationType;
        AnimationDisplayTime = animationDisplayTime;
    }

    public string Code { get; private set; }
    public string? Name { get; private set; }
    public string? Description { get; private set; }
    public SnippetFrameAnimationType AnimationType { get; private set; }
    public int AnimationDisplayTime { get; private set; }
}
