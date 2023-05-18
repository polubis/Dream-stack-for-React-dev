using FluentValidation;

namespace GreenOnSoftware.Application.Reviews.UpdateReviewCommand;

public class UpdateReviewValidator : AbstractValidator<UpdateReview>
{
    public UpdateReviewValidator()
    {
        RuleFor(x => x.Content)
            .NotEmpty()
            .MaximumLength(4000);
    }
}
