using FluentValidation;
using GreenOnSoftware.Application.Account.ResetPasswordCommand;

namespace GreenOnSoftware.Application.Account.ResetPasswordCommand;

internal class ResetPasswordValidator : AbstractValidator<ResetPassword>
{
    public ResetPasswordValidator()
    {
        RuleFor(x => x.UserId)
            .NotEmpty()
            .MaximumLength(36);

        RuleFor(x => x.Token)
            .NotEmpty()
            .MaximumLength(400);

        RuleFor(x => x.NewPassword)
            .NotEmpty()
            .MaximumLength(30);

        RuleFor(x => x.ConfirmNewPassword)
            .NotEmpty()
            .MaximumLength(30)
            .Matches(x => x.NewPassword);
    }
}
