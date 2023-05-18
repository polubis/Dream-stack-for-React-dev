namespace GreenOnSoftware.Application.Articles.GetArticleByIdQuery;

public class ArticleDto
{
    public Guid Id { get; set; }
    public string Title { get; set; }
    public string? Description { get; set; }
    public string Content { get; set; }
    public string AuthorEmail { get; set; }
    public string AuthorName { get; set; }
    public string? ThumbnailUrl { get; set; }
    public string Status { get; set; }
    public string Url { get; set; }

    public DateTime CreatedDate { get; set; }
    public DateTime ModifiedDate { get; set; }
}
