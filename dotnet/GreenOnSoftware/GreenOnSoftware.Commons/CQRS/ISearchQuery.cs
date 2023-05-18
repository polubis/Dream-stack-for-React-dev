using GreenOnSoftware.Commons.Dtos;
using MediatR;

namespace GreenOnSoftware.Commons.CQRS;

public interface ISearchQuery<TResult>: IRequest<PagedResult<TResult>>
{
    string? Search { get; init; }
    int? ItemsPerPage { get; init; }
    int? CurrentPage { get; init; }
}
