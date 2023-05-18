using GreenOnSoftware.Commons.Dtos;
using MediatR;
using GreenOnSoftware.Commons.Context;
using GreenOnSoftware.Application.Account.GetAvatarNameQuery;

namespace GreenOnSoftware.Application.Account.GetAvatarNameQuery;

internal class GetAvatarNameHandler : IRequestHandler<GetAvatarName, Result<string?>>
{
    private readonly IContext _context;

    public GetAvatarNameHandler(IContext context)
    {
        _context = context;
    }

    public Task<Result<string?>> Handle(GetAvatarName query, CancellationToken cancellationToken)
    {
        var result = new Result<string?>();

        result.SetData(_context.Identity.AvatarName);

        return Task.FromResult(result);
    }
}
