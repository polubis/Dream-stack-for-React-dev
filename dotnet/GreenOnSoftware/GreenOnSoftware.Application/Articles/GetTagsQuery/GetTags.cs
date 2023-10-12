using GreenOnSoftware.Commons.Dtos;
using MediatR;

namespace GreenOnSoftware.Application.Articles.GetTagsQuery;

public record GetTags : IRequest<Result>
{
}
