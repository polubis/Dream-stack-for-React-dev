namespace GreenOnSoftware.Application.Dtos;

public class ReviewLookupDto: ICurrentUserReviewer
{
    public Guid Id { get; set; }
    public Guid ArticleId { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime ModifiedDate { get; set; }
    public string? ReviewerName { get; set; }
    public bool IsCurrentUserReviewer { get; set; }
}
