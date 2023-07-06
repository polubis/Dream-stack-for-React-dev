using FluentValidation;

namespace GreenOnSoftware.Application.Account.SignInCommand;

internal class SignInValidator : AbstractValidator<SignIn>
{
    public SignInValidator()
    {
        RuleFor(x => x.Login)
            .NotEmpty()
            .MaximumLength(20);

        RuleFor(x => x.Password)
            .NotEmpty()
            .MaximumLength(30);
    }
}
