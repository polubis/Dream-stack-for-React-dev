namespace GreenOnSoftware.Application.Dtos;

public class ReviewDto : ICurrentUserReviewer
{
    public Guid Id { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime ModifiedDate { get; set; }
    public string? ReviewerName { get; set; }
    public string Content { get; set; }
    public bool IsCurrentUserReviewer { get; set; }
}
