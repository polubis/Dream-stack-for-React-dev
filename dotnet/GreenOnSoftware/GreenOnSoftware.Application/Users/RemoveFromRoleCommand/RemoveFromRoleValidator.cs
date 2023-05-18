using FluentValidation;
using GreenOnSoftware.Application.Users.AddToRoleCommand;
using GreenOnSoftware.Commons.Consts;

namespace GreenOnSoftware.Application.Users.RemoveFromRoleCommand;

public class RemoveFromRoleValidator : AbstractValidator<RemoveFromRole>
{
    public RemoveFromRoleValidator()
    {
        RuleFor(x => x.Role)
            .Must(x => Role.All.Contains(x))
            .WithMessage("Role must have valid value");

        RuleFor(x => x.Role)
            .Must(x => x.ToLower() != Role.Admin.ToLower())
            .WithMessage("Administrators cannot be change");
    }
}
