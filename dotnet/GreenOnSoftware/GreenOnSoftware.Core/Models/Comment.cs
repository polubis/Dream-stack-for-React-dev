using GreenOnSoftware.Core.Identity;
using Microsoft.AspNetCore.Identity;

namespace GreenOnSoftware.Core.Models;

public class Comment: Entity
{
    private Comment()
    {

    }

    public Comment(string content, Guid? authorId, Guid articleId, DateTime operationDate)
    {
        CreatedDate = ModifiedDate = operationDate;
        Content = content;
        ArticleId = articleId;
        AuthorId = authorId;
    }

    public DateTime CreatedDate { get; private set; }
    public DateTime ModifiedDate { get; private set; }
    public string Content { get; private set; }
    public bool IsDeleted { get; private set; }

    public User? Author { get; private set; }
    public Article? Article { get; private set; }
    public Guid? ArticleId { get; private set; }
    public Guid? AuthorId { get; private set; }
}
