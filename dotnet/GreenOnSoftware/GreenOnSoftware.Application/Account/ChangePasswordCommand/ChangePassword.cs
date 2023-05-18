using GreenOnSoftware.Commons.Dtos;
using MediatR;

namespace GreenOnSoftware.Application.Account.ChangePasswordCommand;

public record ChangePassword(string CurrentPassword, string NewPassword, string ConfirmNewPassword) : IRequest<Result>;
