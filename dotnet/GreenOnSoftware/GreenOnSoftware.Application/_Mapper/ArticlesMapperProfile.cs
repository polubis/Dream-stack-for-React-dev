using AutoMapper;
using GreenOnSoftware.Core.Models;
using GreenOnSoftware.Application.Articles.GetArticleQuery;
using GreenOnSoftware.Application.Articles.GetArticlesQuery;
using GreenOnSoftware.Application.Mapper.MappingActions;
using GreenOnSoftware.Application.Dtos;
using GreenOnSoftware.Core.Models.Reviews;

namespace GreenOnSoftware.Application.Mapper;

public class ArticlesMapperProfile : Profile
{
    public ArticlesMapperProfile()
    {
        CreateProjection<Article, ArticleLookupDto>()
            .ForMember(dest => dest.AuthorEmail, o => o.MapFrom(src => src.Author != null ? src.Author.Email : null))
            .ForMember(dest => dest.AuthorName, o => o.MapFrom(src => src.Author != null ? src.Author.UserName : null))
            .ForMember(dest => dest.Tags, o => o.MapFrom(src => src.Tags != null ? src.Tags.Select(x=>x.Name) : null));

        CreateMap<Article, ArticleDto>()
            .ForMember(dest => dest.AuthorEmail, o => o.MapFrom((src, dest) => src.Author?.Email))
            .ForMember(dest => dest.AuthorName, o => o.MapFrom((src, dest) => src.Author?.UserName))
            .ForMember(dest => dest.Tags, o => o.MapFrom(src => src.Tags != null ? src.Tags.Select(x => x.Name) : null));

        CreateMap<Review, ReviewDto>()
            .ForMember(dest => dest.ReviewerName, o => o.MapFrom((src, dest) => src.Reviewer?.UserName))
            .AfterMap<CurrentUserReviewerAction>();

        CreateProjection<Review, UserReviewLookupDto>()
            .ForMember(dest => dest.ArticleAuthorName, o => o.MapFrom(src => src.Article.Author != null ? src.Article.Author.UserName : string.Empty))
            .ForMember(dest => dest.ArticleTitle, o => o.MapFrom(src => src.Article.Title));
    }
}
