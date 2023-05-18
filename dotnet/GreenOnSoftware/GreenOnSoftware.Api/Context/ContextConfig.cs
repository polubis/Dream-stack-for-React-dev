using GreenOnSoftware.Commons.Context;

namespace GreenOnSoftware.Api.Context;

public static class ContextConfig
{
    public static IServiceCollection AddIdentityContext(this IServiceCollection services)
    {
        services.AddSingleton<IContextAccessor, ContextAccessor>();
        services.AddScoped(s => s.GetRequiredService<IContextAccessor>().Context!);

        return services;
    }

    public static IApplicationBuilder UseIdentityContext(this IApplicationBuilder app)
    {
        app.Use((ctx, next) => {
            ctx.RequestServices.GetRequiredService<IContextAccessor>().Context = new Context(ctx);

            return next();
        });

        return app;
    }
}
