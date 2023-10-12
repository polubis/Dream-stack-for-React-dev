using GreenOnSoftware.Application.Services.Interfaces;
using GreenOnSoftware.Commons.Dtos;
using MediatR;

namespace GreenOnSoftware.Application.Articles.GetTagsQuery;

public sealed class GetTagsHandler : IRequestHandler<GetTags, Result>
{
    private readonly ITagsService _tagsService;

    public GetTagsHandler(ITagsService tagsService)
    {
        _tagsService = tagsService;
    }

    public async Task<Result> Handle(GetTags request, CancellationToken cancellationToken)
    {
        var result = new Result<IEnumerable<string>>();
        var tags = await _tagsService.GetAllUniqueTagsAsync();

        result.SetData(tags.Select(x => x.Name).ToList());

        return result;
    }
}
