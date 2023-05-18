using Microsoft.AspNetCore.Identity;

namespace GreenOnSoftware.Core.Identity;

public class UserRole : IdentityUserRole<Guid>
{
    public virtual IdentityRole<Guid> Role { get; set; }
}
