using GreenOnSoftware.Commons.Dtos;
using MediatR;

namespace GreenOnSoftware.Application.Snippets.GetSnippetByIdQuery;

public record GetSnippetById(Guid Id): IRequest<Result>
{

}