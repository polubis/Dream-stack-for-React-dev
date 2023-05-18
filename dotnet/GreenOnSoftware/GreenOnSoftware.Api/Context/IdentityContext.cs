using GreenOnSoftware.Commons.Consts;
using System.Security.Claims;
using GreenOnSoftware.Commons.Context;

namespace GreenOnSoftware.Api.Context;

public class IdentityContext : IIdentityContext
{
    public Guid Id {
        get 
        {
            if(_IdentityUserId == null || _annonymousUserId == null)
            {
                throw new Exception("User id cannot be null!");
            }

            return (IsAuthenticated ? _IdentityUserId : _annonymousUserId) ?? Guid.Empty;
        } 
    }

    public string? Name { get; }

    public bool IsAdmin { get; }

    public bool IsContentEditor { get; }

    public bool IsGeneralUser { get; }

    public bool IsAuthenticated { get; }

    public string? AvatarName { get; }

    private Guid? _annonymousUserId;
    private Guid? _IdentityUserId;


    public IdentityContext(HttpContext httpContext)
        :this(httpContext.User)
    {
        IsAuthenticated = httpContext.User.Identity?.IsAuthenticated ?? false;
        AvatarName = httpContext.Session?.GetString("avatarName") ?? null;
        _annonymousUserId = httpContext.Session is not null ? new Guid(httpContext.Session.Id) : null;
    }

    public IdentityContext(ClaimsPrincipal principal)
    {
        _IdentityUserId = principal.FindFirst(ClaimTypes.NameIdentifier) is var idClaim && idClaim is not null
            ? new Guid(idClaim.Value) : null;
        Name = principal.FindFirst(ClaimTypes.Name)?.Value;
        IsAdmin = principal.FindAll(ClaimTypes.Role).Any(x => x.Value == Role.Admin);
        IsContentEditor = principal.FindAll(ClaimTypes.Role).Any(x => x.Value == Role.ContentEditor) && !IsAdmin;
        IsGeneralUser = principal.FindAll(ClaimTypes.Role).Any(x => x.Value == Role.GeneralUser) && !IsAdmin && !IsContentEditor;        
    }
}
