using GreenOnSoftware.Commons.Dtos;
using MediatR;

namespace GreenOnSoftware.Application.Account.RegisterCommand;

public record Register(string Login, string Email, string Password, string ConfirmPassword) : IRequest<Result>;
