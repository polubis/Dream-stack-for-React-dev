using GreenOnSoftware.Commons.Context;

namespace GreenOnSoftware.Api.Context;

public class Context : IContext
{       
    public IIdentityContext Identity { get; }

    public Context(HttpContext httpContext)
    {
        Identity = new IdentityContext(httpContext);
    }

}
