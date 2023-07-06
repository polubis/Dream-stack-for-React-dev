namespace GreenOnSoftware.Application.Snippets.GetSnippetsQuery;

public class SnippetLookupDto
{
    public Guid Id { get; set; }

    public DateTime CreatedDate { get; set; }

    public string Name { get; set; }

    public string Description { get; set; }

    public string GifUrl { get; private set; }   
}
