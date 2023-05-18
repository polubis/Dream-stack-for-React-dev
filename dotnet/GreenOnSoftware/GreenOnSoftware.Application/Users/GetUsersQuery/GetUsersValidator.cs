using FluentValidation;
using GreenOnSoftware.Commons.Consts;
using Microsoft.EntityFrameworkCore;

namespace GreenOnSoftware.Application.Users.GetUsersQuery;

public class GetUsersValidator : AbstractValidator<GetUsers>
{
    public GetUsersValidator()
    {
        RuleFor(x => x.Roles)
            .Must(x => x is null || x.All(s => Role.All.Contains(s)))
            .WithMessage("Roles must have valid values");

        RuleFor(x => x.Search)
            .MaximumLength(100);

        RuleFor(x => x.ItemsPerPage)
            .LessThanOrEqualTo(50);

        RuleFor(x => x.CurrentPage)
            .LessThanOrEqualTo(1000);
    }
}