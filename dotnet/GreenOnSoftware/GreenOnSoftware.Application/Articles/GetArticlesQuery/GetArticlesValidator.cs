using GreenOnSoftware.Core.Models;
using FluentValidation;
using GreenOnSoftware.Commons.Context;

namespace GreenOnSoftware.Application.Articles.GetArticlesQuery;

public class GetArticlesValidator : AbstractValidator<GetArticles>
{
    public GetArticlesValidator(IContext context)
    {
        RuleFor(x => x.Search)
            .MaximumLength(100);

        RuleFor(x => x.Status)
            .Must(x => x is null || x.All(s => Enum.TryParse<Status>(s, true, out _)))
            .WithMessage("Status must have valid values");

        RuleFor(x => x.Status)
            .Must(x => x is null || context.Identity.IsAuthenticated 
                || !context.Identity.IsAuthenticated && x.All(x=>x == Status.Accepted.ToString()))
            .WithMessage("Annonymous user can get Accepted articles only.");

        RuleFor(x => x.ItemsPerPage)
            .LessThanOrEqualTo(50);

        RuleFor(x => x.CurrentPage)
            .LessThanOrEqualTo(1000);
    }
}
