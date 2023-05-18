using GreenOnSoftware.Commons.Dtos;
using MediatR;

namespace GreenOnSoftware.Application.Account.SignOutCommand;

public record SignOut() : IRequest<Result>;
