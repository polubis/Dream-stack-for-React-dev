using GreenOnSoftware.Core.Identity;
using Microsoft.AspNetCore.Identity;

namespace GreenOnSoftware.Core.Models;

public class Review : Entity
{
    public Guid? ReviewerId { get; private set; }
    public User? Reviewer { get; set; }
    public Guid ArticleId { get; private set; }
    public Article Article { get; private set; }
    public DateTime CreatedDate { get; private set; }
    public DateTime ModifiedDate { get; private set; }
    public string Content { get; private set; }


    private Review()
    {

    }

    public Review(Guid reviewerId, DateTime createdDate, string content)
    {
        ReviewerId = reviewerId;
        CreatedDate = createdDate;
        ModifiedDate = createdDate;
        Content = content;
    }

    public void Update(string content, DateTime modifiedDate)
    {
        Content = content;
        ModifiedDate = modifiedDate;
    }
}
