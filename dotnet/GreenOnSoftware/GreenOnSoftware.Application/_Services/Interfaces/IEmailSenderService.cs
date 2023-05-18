using GreenOnSoftware.Commons.Dtos;

namespace GreenOnSoftware.Application.Services.Interfaces;

public interface IEmailSenderService
{
    Task<Result> SendEmailAsync(string recipient, string subject, string textContent);
}