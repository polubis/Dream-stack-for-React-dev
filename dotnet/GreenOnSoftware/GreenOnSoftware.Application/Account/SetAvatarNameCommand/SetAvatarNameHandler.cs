using GreenOnSoftware.Application.Services.Interfaces;
using GreenOnSoftware.Commons.Dtos;
using MediatR;

namespace GreenOnSoftware.Application.Ratings.SetAvatarNameCommand;

internal class SetAvatarNameHandler : IRequestHandler<SetAvatarName, Result>
{
    private readonly IRatingsSessionService _ratingsSessionService;

    public SetAvatarNameHandler(IRatingsSessionService ratingsSessionService)
    {
        _ratingsSessionService = ratingsSessionService;
    }

    public Task<Result> Handle(SetAvatarName command, CancellationToken cancellationToken)
    {
        var result = new Result();

        _ratingsSessionService.SetAvatarName(command.AvatarName);

        return Task.FromResult(result);
    }
}
