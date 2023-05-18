using FluentValidation;
using GreenOnSoftware.Application.Account.ForgottenPasswordCommand;

namespace GreenOnSoftware.Application.Account.ForgottenPasswordCommand;

internal class ForgottenPasswordValidator: AbstractValidator<ForgottenPassword>
{
    public ForgottenPasswordValidator()
    {
        RuleFor(x => x.Login)
            .NotEmpty();
    }
}
