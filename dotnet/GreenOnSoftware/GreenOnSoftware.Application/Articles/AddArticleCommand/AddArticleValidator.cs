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
    }
}
