using GreenOnSoftware.Commons.Dtos;

namespace GreenOnSoftware.Application.Services.Interfaces;

public interface IEmailService
{
    string GetResetPasswordUrl(string token, Guid userId);
    Task<Result> SendResetPasswordEmailAsync(string email, string username, Guid userId, string token);
}