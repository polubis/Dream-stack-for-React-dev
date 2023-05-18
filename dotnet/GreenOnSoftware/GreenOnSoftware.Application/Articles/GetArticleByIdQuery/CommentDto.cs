namespace GreenOnSoftware.Application.Articles.GetArticleByIdQuery;

public class CommentDto
{
    public Guid Id { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime ModifiedDate { get; set; }
    public string Content { get; set; }
    public string Username { get; set; }
}
