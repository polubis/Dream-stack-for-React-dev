using GreenOnSoftware.Application.Services.Interfaces;
using Microsoft.AspNetCore.Http;

namespace GreenOnSoftware.Application.Services;

public class RatingsSessionService : IRatingsSessionService
{
    private const string AvatarNameKey = "avatarName";

    private readonly IHttpContextAccessor _httpContextAccessor;

    public RatingsSessionService(IHttpContextAccessor httpContextAccessor)
    {
        _httpContextAccessor = httpContextAccessor;
    }

    public void SetAvatarName(string avatarName)
    {
        _httpContextAccessor.HttpContext!.Session.SetString(AvatarNameKey, avatarName);
    }
}