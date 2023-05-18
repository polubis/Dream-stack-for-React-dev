using Serilog.Context;

namespace GreenOnSoftware.Api.Middlewares;

public class LogUsernameMiddleware
{
    private readonly RequestDelegate next;

    public LogUsernameMiddleware(RequestDelegate next)
    {
        this.next = next;
    }

    public async Task Invoke(HttpContext context)
    {
        LogContext.PushProperty("Username", context.User.Identity?.Name);

        await next(context);
    }
}
