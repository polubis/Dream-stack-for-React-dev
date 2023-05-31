using AutoMapper;
using GreenOnSoftware.Application.Users.GetUsersQuery;
using GreenOnSoftware.Core.Identity;

namespace GreenOnSoftware.Application.Mapper;

public class UsersMapperProfile : Profile
{
    public UsersMapperProfile()
    {
        CreateProjection<User, UserLookupDto>()
            .ForMember(dest => dest.Name, o => o.MapFrom(src => src.UserName))
            .ForMember(dest => dest.Roles, o => o.MapFrom(src => src.Roles.Select(x=>x.Role.Name).ToArray()));
    }
}