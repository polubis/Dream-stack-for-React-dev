using FluentValidation;
using GreenOnSoftware.Commons.Context;

namespace GreenOnSoftware.Application.Snippets.GetSnippetsQuery;

public class GetSnippetsValidator : AbstractValidator<GetSnippets>
{
    public GetSnippetsValidator(IContext context)
    {
        RuleFor(x => x.Search)
            .MaximumLength(100);

        RuleFor(x => x.ItemsPerPage)
            .LessThanOrEqualTo(50);

        RuleFor(x => x.CurrentPage)
            .LessThanOrEqualTo(1000);
    }
}
