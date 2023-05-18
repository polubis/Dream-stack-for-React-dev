using FluentValidation;
using GreenOnSoftware.Application.Reviews.AddReviewCommand;

namespace GreenOnSoftware.Application.Ratings.AddArticleRateCommand;

public class AddArticleRateValidator : AbstractValidator<AddArticleRate>
{
    public AddArticleRateValidator()
    {
        RuleFor(x => x.ArticleId)
            .NotEmpty();

        RuleFor(x => x.Value)
            .InclusiveBetween(1, 5);
    }
}
