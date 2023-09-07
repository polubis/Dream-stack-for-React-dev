using FluentValidation;

namespace GreenOnSoftware.Application.Ratings.UpdateArticleRate;

public class UpdateArticleRateValidator : AbstractValidator<UpdateArticleRate>
{
    public UpdateArticleRateValidator()
    {
        RuleFor(x => x.Value)
            .InclusiveBetween(1, 5);
    }
}
