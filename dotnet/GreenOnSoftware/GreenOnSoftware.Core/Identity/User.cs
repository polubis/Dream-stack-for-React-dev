using Microsoft.AspNetCore.Identity;

namespace GreenOnSoftware.Core.Identity;

public class User : IdentityUser<Guid>
{
    public virtual ICollection<UserRole> Roles { get; set; }
    public virtual ICollection<IdentityUserToken<Guid>> Tokens { get; set; }
}
