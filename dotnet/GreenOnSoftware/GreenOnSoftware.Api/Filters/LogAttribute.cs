using Microsoft.AspNetCore.Mvc.Filters;
using Serilog;

namespace GreenOnSoftware.Api.Filters;

[AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
public class LogAttribute : ActionFilterAttribute
{
    public override void OnActionExecuting(ActionExecutingContext context)
    {
        Log.Information($"Started processing request {context.HttpContext.Request.Path}");
    }

    public override void OnActionExecuted(ActionExecutedContext context)
    {
        string message;

        if (context.HttpContext.Response.StatusCode >= StatusCodes.Status400BadRequest)
        {
            message = "Ended processing request with errors.";
        }
        else
        {
            message = "Ended processing request with success.";
        }
        Log.Information(message);
    }
}