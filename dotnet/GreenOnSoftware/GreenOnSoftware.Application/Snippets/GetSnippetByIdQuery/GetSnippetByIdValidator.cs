using FluentValidation;

namespace GreenOnSoftware.Application.Snippets.GetSnippetByIdQuery;

public sealed class GetSnippetByIdValidator: AbstractValidator<GetSnippetById>
{
    public GetSnippetByIdValidator()
    {
        RuleFor(x => x.Id)
            .NotEmpty();
    }
}
