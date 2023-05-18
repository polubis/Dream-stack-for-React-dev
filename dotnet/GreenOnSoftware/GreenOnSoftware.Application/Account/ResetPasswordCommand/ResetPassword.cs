using GreenOnSoftware.Commons.Dtos;
using MediatR;

namespace GreenOnSoftware.Application.Account.ResetPasswordCommand;
public record ResetPassword(string NewPassword, string ConfirmNewPassword, string UserId, string Token) : IRequest<Result>;
