using GreenOnSoftware.Commons.Dtos;
using MediatR;

namespace GreenOnSoftware.Application.Users.AddToRoleCommand;

public record AddToRole(string Role) : IRequest<Result>
{
    internal Guid UserId { get; private set; }

    public AddToRole BindId(Guid userId)
    {
        UserId = userId;

        return this;
    }
}
