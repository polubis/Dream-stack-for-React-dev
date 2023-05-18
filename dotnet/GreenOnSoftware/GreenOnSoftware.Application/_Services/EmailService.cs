using GreenOnSoftware.Application.Configuration;
using GreenOnSoftware.Application.Services.Interfaces;
using GreenOnSoftware.Commons.Dtos;
using Microsoft.Extensions.Options;
using System.Collections.Specialized;
using System.Text;

namespace GreenOnSoftware.Application.Services;

public class EmailService : IEmailService
{
    private readonly IEmailSenderService _emailSenderService;
    private readonly ApplicationConfiguration _configuration;

    public EmailService(IEmailSenderService emailSenderService, IOptions<ApplicationConfiguration> options)
    {
        _emailSenderService = emailSenderService;

        _configuration = options.Value;
    }


    public async Task<Result> SendResetPasswordEmailAsync(string email, string username, Guid userId, string token)
    {
        var result = new Result();

        string subject = "GreenOnSoftware - Reset Password";
        string text = $"<p>Dear {username}</p>" +
            $"<p>Please reset your password by clicking this link: <a href=\"" + GetResetPasswordUrl(token, userId) + "\">link</a></p><br/>" +
            "<p>Best Regards,<br/>" +
            "GreenOnSoftware Team</p>";

        var emailSenderResponse = await _emailSenderService.SendEmailAsync(email, subject, text);
        if (emailSenderResponse.HasErrors)
        {
            result.AddErrors(emailSenderResponse);
        }

        return result;
    }

    public string GetResetPasswordUrl(string token, Guid userId)
    {
        NameValueCollection queryString = System.Web.HttpUtility.ParseQueryString(string.Empty);

        queryString.Add("token", Convert.ToBase64String(Encoding.ASCII.GetBytes(token)));
        queryString.Add("userId", userId.ToString());

        if (string.IsNullOrEmpty(_configuration.ResetPasswordUrl))
        {
            return $"empty?{queryString}";
        }

        return $"{_configuration.ResetPasswordUrl}?{queryString}";
    }

}