namespace GreenOnSoftware.Core.Models;

public class Tag : Entity
{
    public string Name { get; private set; }

    public ICollection<Article> Articles { get; set; }

    private Tag()
    {

    }

    public Tag(string name)
    {
        Name = name;
    }
}
