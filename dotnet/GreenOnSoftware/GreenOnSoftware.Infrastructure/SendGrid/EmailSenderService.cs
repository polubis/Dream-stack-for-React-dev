using GreenOnSoftware.Commons.Resources;
using Microsoft.Extensions.Options;
using SendGrid.Helpers.Mail;
using SendGrid;
using System.Net;
using GreenOnSoftware.Commons.Dtos;
using Serilog;
using GreenOnSoftware.Application.Services.Interfaces;

namespace GreenOnSoftware.Infrastructure.SendGrid;

internal class EmailSenderService : IEmailSenderService
{
    private readonly SendGridConfiguration _configuration;

    public EmailSenderService(IOptions<SendGridConfiguration> configuration)
    {
        _configuration = configuration.Value;
    }

    public async Task<Result> SendEmailAsync(string recipient, string subject, string textContent)
    {
        var result = new Result();
        var client = new SendGridClient(_configuration.ApiKey);
        var message = new SendGridMessage() {
            From = new EmailAddress(_configuration.SenderEmailAddress, _configuration.SenderName),
            Subject = subject,
            HtmlContent = textContent,
        };

        message.AddTo(new EmailAddress(recipient));
        var response = await client.SendEmailAsync(message);


        if (response.StatusCode != HttpStatusCode.Accepted)
        {
            var responseContent = await response.Body.ReadAsStringAsync();

            Log.Error(responseContent);
            result.AddError(ErrorMessages.SendEmailFailed);
        }

        return result;
    }
}