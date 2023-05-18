namespace GreenOnSoftware.Application.Dtos;

public class UserReviewLookupDto
{
    public Guid Id { get; set; }
    public Guid ArticleId { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime ModifiedDate { get; set; }
    public string? ArticleAuthorName { get; set; }
    public string ArticleTitle { get; set; }
}