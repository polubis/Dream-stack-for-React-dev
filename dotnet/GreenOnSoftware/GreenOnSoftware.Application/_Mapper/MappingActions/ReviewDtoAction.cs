using AutoMapper;
using GreenOnSoftware.Application.Dtos;
using GreenOnSoftware.Commons.Context;
using GreenOnSoftware.Core.Models.Reviews;

namespace GreenOnSoftware.Application.Mapper.MappingActions;

internal sealed class CurrentUserReviewerAction : IMappingAction<Review, ICurrentUserReviewer>
{
    private readonly IContext _context;

    public CurrentUserReviewerAction(IContext context)
    {
        _context = context;
    }

    public void Process(Review source, ICurrentUserReviewer destination, ResolutionContext context)
    {
        destination.IsCurrentUserReviewer = source.ReviewerId == _context.Identity.Id;
    }
}
