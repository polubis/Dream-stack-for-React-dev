using FluentValidation;

namespace GreenOnSoftware.Application.Ratings.AddArticleRateCommand;

public class AddArticleRateValidator : AbstractValidator<AddArticleRate>
{
    public AddArticleRateValidator()
    {
        RuleFor(x => x.Value)
            .InclusiveBetween(1, 5);
    }
}
