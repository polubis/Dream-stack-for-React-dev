using FluentValidation;
using GreenOnSoftware.Commons.Context;
using GreenOnSoftware.Core.Enums;

namespace GreenOnSoftware.Application.Articles.GetArticlesQuery;

public class GetArticlesValidator : AbstractValidator<GetArticles>
{
    public GetArticlesValidator(IContext context)
    {
        RuleFor(x => x.Search)
            .MaximumLength(100);

        RuleFor(x => x.Status)
            .Must(x => x is null || x.All(s => Enum.TryParse<Status>(s, ignoreCase: true, out _)))
            .WithMessage("Status must have valid values");

        RuleFor(x => x.Status)
            .Must(x => x is null || context.Identity.IsAuthenticated 
                || !context.Identity.IsAuthenticated && x.All(x=>x.Equals(Status.Accepted.ToString(), StringComparison.OrdinalIgnoreCase)))
            .WithMessage("Annonymous user can get Accepted articles only.");

        RuleFor(x => x.ItemsPerPage)
            .LessThanOrEqualTo(50);

        RuleFor(x => x.CurrentPage)
            .LessThanOrEqualTo(1000);

        RuleFor(x => x.Tags)
            .Must(x => x is null || x.Length <= 10)
            .WithMessage(x => "Maximum number of tags: 10");

        RuleForEach(x => x.Tags)
            .ChildRules(tag =>
                tag.RuleFor(x => x)
                    .MinimumLength(1)
                    .MaximumLength(20)
                    .Matches(@"^([A-Z][a-z0-9\+\&\#\!\=\.\@\*]*)+$")
                    .WithMessage("Tag must be in PascalCase. Allowed special characters: ., #, $, =, +, !, @, *"));
    }
}
