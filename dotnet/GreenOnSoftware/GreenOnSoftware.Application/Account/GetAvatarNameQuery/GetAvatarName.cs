using GreenOnSoftware.Commons.Dtos;
using MediatR;

namespace GreenOnSoftware.Application.Account.GetAvatarNameQuery;

public record GetAvatarName() : IRequest<Result<string?>>;
