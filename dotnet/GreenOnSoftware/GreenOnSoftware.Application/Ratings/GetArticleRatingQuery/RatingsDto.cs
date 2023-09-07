namespace GreenOnSoftware.Application.Ratings.GetArticleRatingQuery;

public class RatingsDto
{
    public RatingsDto(IEnumerable<KeyValuePair<string, double>> averageRatingByAvatars, double? averageRating, string? currentUserRateAvatar, int? currentUserRateValue)
    {
        AverageRatingByAvatars = averageRatingByAvatars;
        AverageRating = averageRating;
        CurrentUserRateAvatar = currentUserRateAvatar;
        CurrentUserRateValue = currentUserRateValue;
    }

    public IEnumerable<KeyValuePair<string, double>> AverageRatingByAvatars { get; }
    public double? AverageRating { get; }
    public string? CurrentUserRateAvatar { get; }
    public int? CurrentUserRateValue { get; }
}