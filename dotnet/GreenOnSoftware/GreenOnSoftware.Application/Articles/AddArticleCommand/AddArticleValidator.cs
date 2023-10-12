using FluentValidation;
using GreenOnSoftware.Core.Enums;

namespace GreenOnSoftware.Application.Articles.AddArticleCommand;

public class AddArticleValidator : AbstractValidator<AddArticle>
{
    public AddArticleValidator()
    {
        RuleFor(x => x.Title).NotEmpty();
        RuleFor(x => x.Content).NotEmpty();

        RuleFor(x => x.Title)
            .MaximumLength(200);
        RuleFor(x => x.Description)
            .MaximumLength(500);
        RuleFor(x=>x.Lang)
            .NotEmpty()
            .MaximumLength(2)
            .Must(x=> Enum.TryParse<Language>(x, ignoreCase: true, out _))
            .WithMessage("Lang must have valid values");

        RuleFor(x => x.Thumbnail)
            .NotEmpty();

        RuleFor(x => x.Tags)
            .NotEmpty()
            .Must(x => x?.Length >= 1 && x?.Length <= 10)
            .WithMessage(x => "Number of tags must be between 1 and 10");

        RuleForEach(x => x.Tags)
            .ChildRules(tag =>
                tag.RuleFor(x => x)
                    .MinimumLength(1)
                    .MaximumLength(20)
                    .Matches(@"^([A-Z][a-z0-9\+\&\#\!\=\.\@\*]*)+$")
                    .WithMessage("Tag must be in PascalCase. Allowed special characters: ., #, $, =, +, !, @, *"));
    }
}
