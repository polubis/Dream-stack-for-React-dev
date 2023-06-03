using FluentValidation;
using GreenOnSoftware.Core.Enums;

namespace GreenOnSoftware.Application.Snippets.AddSnippetCommand;

public class AddSnippetValidator : AbstractValidator<AddSnippet>
{
    public AddSnippetValidator()
    {
        RuleFor(x => x.Name)
            .MaximumLength(200)
            .NotEmpty();

        RuleFor(x => x.Description)
            .MaximumLength(500)
            .NotEmpty();

        RuleFor(x => x.Frames)
            .NotEmpty();

        RuleFor(x => x.GifUrl)
            .MaximumLength(300);

        //SnippetFrame

        RuleForEach(x => x.Frames).ChildRules(frame =>
            frame.RuleFor(x => x.Code)
                .NotEmpty()
                .MaximumLength(5000));

        RuleForEach(x => x.Frames).ChildRules(frame =>
            frame.RuleFor(x => x.Name)
                .MaximumLength(200));

        RuleForEach(x => x.Frames).ChildRules(frame =>
            frame.RuleFor(x => x.Description)
                .MaximumLength(500));

        // SnippetFrameAnimation

        RuleForEach(x => x.Frames).ChildRules(frame =>
            frame.RuleFor(x => x.Animation).ChildRules(
                animation => animation.RuleFor(x => x.DisplayTime)
                    .GreaterThanOrEqualTo(0)));

        RuleForEach(x => x.Frames).ChildRules(frame =>
            frame.RuleFor(x => x.Animation).ChildRules(
                animation => animation.RuleFor(x => x.Type)
                    .Must(x => Enum.TryParse<SnippetFrameAnimationType>(x, ignoreCase: true, out _))
                    .WithMessage("Animation type must have valid value")));
    }
}

