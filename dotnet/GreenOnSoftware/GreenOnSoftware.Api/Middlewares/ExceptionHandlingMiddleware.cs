using GreenOnSoftware.Commons.Dtos;
using Microsoft.Extensions.Primitives;
using Serilog;
using System.Text.Json;

namespace GreenOnSoftware.Api.Middlewares;

public class ExceptionHandlingMiddleware
{
    private readonly RequestDelegate _next;

    public ExceptionHandlingMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task Invoke(HttpContext context)
    {
        try
        {
            await _next(context);

            if (context.Response.StatusCode == StatusCodes.Status401Unauthorized)
            {
                StringValues userAgent;
                context.Request.Headers.TryGetValue("User-Agent", out userAgent);
                Log.Warning($"Rejected unauthorized request {context.Request.Path} user-agent: {userAgent}");
            }
        }
        catch(InvalidOperationException ioe)
        {
            Log.Error(ioe, "An error occurred");
            await SetResponse(context, ioe);
        }
        catch (Exception ex)
        {
            Log.Error(ex, "Unexpected error occurred");
            await SetResponse(context, ex);
        }
    }

    private async Task SetResponse(HttpContext context, Exception ex)
    {
        context.Response.Clear();

        var result = JsonSerializer.Serialize(new Result($"{ex.Message} {ex.InnerException?.Message}".Trim()));
        context.Response.ContentType = "application/json";
        context.Response.StatusCode = 400;

        await context.Response.WriteAsync(result);
    }
}
