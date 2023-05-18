using FluentValidation;

namespace GreenOnSoftware.Application.Ratings.SetAvatarNameCommand;

internal class SetAvatarNameValidator : AbstractValidator<SetAvatarName>
{
    public SetAvatarNameValidator()
    {
        RuleFor(x => x.AvatarName)
            .NotEmpty()
            .MinimumLength(2)
            .MaximumLength(30);
    }
}
