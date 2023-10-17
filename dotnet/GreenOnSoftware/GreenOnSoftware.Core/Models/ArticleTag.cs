namespace GreenOnSoftware.Core.Models;

public class ArticleTag
{
    public Tag Tag { get; private set; }

    public Guid TagId { get; private set; }

    public  Article Article { get; set; }

    public Guid ArticleId { get; private set; }

    private ArticleTag()
    {
        
    }

    public ArticleTag(string tag)
    {
        Tag = new Tag(tag);
    }

    public ArticleTag(Tag tag)
    {
        Tag = tag;
    }
}