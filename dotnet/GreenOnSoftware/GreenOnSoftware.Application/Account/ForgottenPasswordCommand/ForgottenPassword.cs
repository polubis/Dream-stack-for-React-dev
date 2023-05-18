using GreenOnSoftware.Commons.Dtos;
using MediatR;

namespace GreenOnSoftware.Application.Account.ForgottenPasswordCommand;

public record ForgottenPassword(string Login) : IRequest<Result>;
