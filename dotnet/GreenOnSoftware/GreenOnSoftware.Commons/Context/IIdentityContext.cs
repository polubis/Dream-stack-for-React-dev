namespace GreenOnSoftware.Commons.Context;

public interface IIdentityContext
{
    Guid Id { get; }
    string? Name { get; }
    bool IsAdmin { get; }
    bool IsContentEditor { get; }
    bool IsGeneralUser { get; }
    bool IsAuthenticated { get; }
    string? AvatarName { get; }
    
}
