using GreenOnSoftware.Commons.Dtos;
using MediatR;

namespace GreenOnSoftware.Application.Users.RemoveFromRoleCommand;

public record RemoveFromRole(string Role) : IRequest<Result>
{
    internal Guid UserId { get; private set; }

    public RemoveFromRole BindId(Guid userId)
    {
        UserId = userId;

        return this;
    }
}