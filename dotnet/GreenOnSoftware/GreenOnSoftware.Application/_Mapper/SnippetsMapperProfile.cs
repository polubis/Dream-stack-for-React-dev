using AutoMapper;
using GreenOnSoftware.Application.Snippets.GetSnippetByIdQuery;
using GreenOnSoftware.Application.Snippets.GetSnippetsQuery;
using GreenOnSoftware.Core.Models.Snippets;

namespace GreenOnSoftware.Application.Mapper;

public class SnippetsMapperProfile : Profile
{
    public SnippetsMapperProfile()
    {
        CreateMap<Snippet, SnippetDto>();
        CreateMap<SnippetFrame, SnippetDto.SnippetFrameDto>()
            .ForMember(x => x.Animation, opt => opt.MapFrom(mappingFunction: (src, dst) => new SnippetDto.SnippetFrameAnimationDto {
                DisplayTime = src.AnimationDisplayTime,
                Type = src.AnimationType.ToString()
            }));

        CreateProjection<Snippet, SnippetLookupDto>();
    }
}