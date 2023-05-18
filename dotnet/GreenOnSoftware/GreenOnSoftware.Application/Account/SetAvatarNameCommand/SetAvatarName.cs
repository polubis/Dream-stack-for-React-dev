using GreenOnSoftware.Commons.Dtos;
using MediatR;

namespace GreenOnSoftware.Application.Ratings.SetAvatarNameCommand;

public record SetAvatarName(string AvatarName) : IRequest<Result>;
