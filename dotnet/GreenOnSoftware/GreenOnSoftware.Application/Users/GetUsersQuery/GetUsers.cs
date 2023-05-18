using GreenOnSoftware.Commons.CQRS;

namespace GreenOnSoftware.Application.Users.GetUsersQuery;

public record GetUsers(string[]? Roles, string? Search, int? ItemsPerPage, int? CurrentPage) 
    : ISearchQuery<UserLookupDto>;
