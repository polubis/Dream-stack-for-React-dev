using FluentValidation;
using GreenOnSoftware.Application.Account.RegisterCommand;

namespace GreenOnSoftware.Application.Account.RegisterCommand;

internal class RegisterValidator : AbstractValidator<Register>
{
    public RegisterValidator()
    {
        RuleFor(x => x.Login)
            .NotEmpty()
            .MaximumLength(20);

        RuleFor(x => x.Email)
            .NotEmpty()
            .EmailAddress();

        RuleFor(x => x.Password)
            .NotEmpty()
            .MaximumLength(30);

        RuleFor(x => x.ConfirmPassword)
            .NotEmpty()
            .MaximumLength(30)
            .Matches(x => x.Password);
    }
}

