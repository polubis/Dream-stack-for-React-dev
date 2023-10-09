namespace GreenOnSoftware.Core.Models;

public class Tag : Entity
{
    public string Name { get; private set; }

    private Tag()
    {

    }

    public Tag(string name)
    {
        Name = name;
    }
}
