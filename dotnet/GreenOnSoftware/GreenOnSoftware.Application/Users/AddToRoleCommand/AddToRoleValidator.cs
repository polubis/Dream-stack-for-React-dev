using FluentValidation;
using GreenOnSoftware.Commons.Consts;
using GreenOnSoftware.Commons.Helpers;

namespace GreenOnSoftware.Application.Users.AddToRoleCommand;

public class AddToRoleValidator : AbstractValidator<AddToRole>
{
    public AddToRoleValidator()
    {
        RuleFor(x => x.Role)
            .Must(x => Role.All.Contains(x))
            .WithMessage("Role must have valid value");

        if (!EnvironmentHelper.IsDevOrLocal())
        {
            RuleFor(x => x.Role)
                .Must(x => x.ToLower() != Role.Admin.ToLower())
                .WithMessage("Administrators cannot be change");
        }
    }
}