namespace GreenOnSoftware.Application.Users.GetUsersQuery;

public sealed class UserLookupDto
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string[] Roles { get; set; }
}
