namespace GreenOnSoftware.Core.Models;

public class AnnonymousArticleRate : Entity
{
    public Guid UserId { get; private set; }
    public Guid ArticleId { get; private set; }
    public Article Article { get; private set; }
    public DateTime CreatedDate { get; private set; }
    public int Value { get; private set; }
    public string AvatarName { get; private set; }


    private AnnonymousArticleRate()
    {

    }

    public AnnonymousArticleRate(Guid userId, int value, string avatarName, DateTime createdDate)
    {
        UserId = userId;
        Value = value;
        AvatarName = avatarName;
        CreatedDate = createdDate;
    }

    public void Update(int value, string avatarName, DateTime createdDate)
    {
        Value = value;
        AvatarName = avatarName;
        CreatedDate = createdDate;
    }
}
