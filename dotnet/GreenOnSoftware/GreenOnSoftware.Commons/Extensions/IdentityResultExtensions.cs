using Microsoft.AspNetCore.Identity;

namespace GreenOnSoftware.Commons.Extensions;

public static class IdentityResultExtensions
{
    public static IEnumerable<string> GetErrors(this IdentityResult identityResult)
    {
        return identityResult.Errors.Select(x => x.Description);
    }
}