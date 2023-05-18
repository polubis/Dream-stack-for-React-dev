using FluentValidation;

namespace GreenOnSoftware.Application.Reviews.AddReviewCommand;

public class AddReviewValidator : AbstractValidator<AddReview>
{
    public AddReviewValidator()
    {
        RuleFor(x => x.Content)
            .NotEmpty()
            .MaximumLength(4000);
    }
}
