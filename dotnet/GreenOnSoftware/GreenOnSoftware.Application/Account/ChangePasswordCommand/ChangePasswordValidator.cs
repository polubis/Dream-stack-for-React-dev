using FluentValidation;
using GreenOnSoftware.Application.Account.ChangePasswordCommand;

namespace GreenOnSoftware.Application.Account.ChangePasswordCommand;

internal class ChangePasswordValidator : AbstractValidator<ChangePassword>
{
    public ChangePasswordValidator()
    {

        RuleFor(x => x.CurrentPassword)
            .NotEmpty()
            .MaximumLength(100);

        RuleFor(x => x.NewPassword)
            .NotEmpty()
            .MaximumLength(100);

        RuleFor(x => x.ConfirmNewPassword)
            .NotEmpty()
            .MaximumLength(100)
            .Matches(x => x.NewPassword);
    }
}
