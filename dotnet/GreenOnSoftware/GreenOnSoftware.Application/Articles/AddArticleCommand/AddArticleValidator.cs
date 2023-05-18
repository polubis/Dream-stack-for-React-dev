using FluentValidation;

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
        RuleFor(x => x.Url)
            .NotEmpty()
            .MaximumLength(300);
    }
}
