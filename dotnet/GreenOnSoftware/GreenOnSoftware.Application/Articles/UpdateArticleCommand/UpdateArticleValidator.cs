using FluentValidation;

namespace GreenOnSoftware.Application.Articles.UpdateArticleCommand;

public class UpdateArticleValidator : AbstractValidator<UpdateArticle>
{
    public UpdateArticleValidator()
    {
        RuleFor(x => x.Title).NotEmpty();
        RuleFor(x => x.Content).NotEmpty();

        RuleFor(x => x.Title)
            .MaximumLength(200);
        RuleFor(x => x.Description)
            .MaximumLength(500);
        RuleFor(x => x.Url)
            .MaximumLength(300);
    }
}
