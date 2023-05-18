using GreenOnSoftware.Commons.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace GreenOnSoftware.Api.Startup;

public static class InvalidModelStateResponseFactory
{
    public static BadRequestObjectResult CustomErrorResponse(ActionContext actionContext)
    {
        var errors = actionContext.ModelState
            .Where(modelError => modelError.Value?.Errors.Count > 0)
            .ToDictionary(x => x.Key, x => x.Value?.Errors.FirstOrDefault()?.ErrorMessage ?? string.Empty);

        return new BadRequestObjectResult(new Result(errors));
    }
}
