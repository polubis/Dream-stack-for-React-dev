using GreenOnSoftware.Commons.Dtos;
using MediatR;

namespace GreenOnSoftware.Application.Account.SignInCommand;

public record SignIn(string Login, string Password) : IRequest<Result>;
