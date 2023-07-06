using GreenOnSoftware.Core.Enums;
using GreenOnSoftware.Core.Identity;
using GreenOnSoftware.Core.Models.Ratings;
using GreenOnSoftware.Core.Models.Reviews;
using Microsoft.AspNetCore.Identity;
using System.Linq;

namespace GreenOnSoftware.Core.Models;
public class Article : Entity
{
    private Article()
    {

    }

    public Article(string title, string? description, string content, string? thumbnailUrl, string url, string lang, Guid authorId, DateTime operationDate)
    {
        CreatedDate = ModifiedDate = operationDate;
        Title = title;
        Description = description;
        Content = content;
        ThumbnailUrl = thumbnailUrl;
        Url = url;
        AuthorId = authorId;
        Status = Status.Draft;
        Lang = Enum.Parse<Language>(lang, ignoreCase: true);
    }

    public DateTime CreatedDate { get; private set; }
    public DateTime ModifiedDate { get; private set; }
    public string Title { get; private set; }
    public string? Description { get; private set; }
    public string Content { get; private set; }
    public string? ThumbnailUrl { get; private set; }
    public string Url { get; private set; }
    public Status Status { get; private set; }
    public bool IsDeleted { get; private set; }
    public Language Lang { get; private set; }

    public Guid? AuthorId { get; private set; }

    public User? Author { get; private set; }

    public List<Comment> Comments { get; private set; } = new();

    public List<UserArticleRate> Rates { get; private set; } = new();

    public List<AnnonymousArticleRate> AnnonymousRates { get; private set; } = new();

    public List<Review> Reviews { get; private set; } = new();

    public void Update(string title, string? description, string content, string? thumbnailUrl, string url, string lang, DateTime operationDate)
    {
        Title = title;
        Description = description;
        Content = content;
        ThumbnailUrl = thumbnailUrl;
        Url = url;
        ModifiedDate = operationDate;
        Lang = Enum.Parse<Language>(lang, ignoreCase: true);
    }

    public void SendForApproval()
    {
        if (Status == Status.WaitingForApproval)
        {
            throw new InvalidOperationException("Article is already waiting for approval!");
        }
        if (Status != Status.WaitingForApproval && Status != Status.Draft)
        {
            throw new InvalidOperationException("Article has invalid state for this operation!");
        }


        Status = Status.WaitingForApproval;
    }

    public void Accept()
    {
        if (Status == Status.Accepted)
        {
            throw new InvalidOperationException("Article is already accepted!");
        }
        if (Status != Status.WaitingForApproval)
        {
            throw new InvalidOperationException("Article has invalid state for this operation!");
        }

        Status = Status.Accepted;
    }

    public void Reject()
    {
        if (Status == Status.NeedWork)
        {
            throw new InvalidOperationException("Article is already rejected!");
        }
        if (Status != Status.WaitingForApproval)
        {
            throw new InvalidOperationException("Article has invalid state for this operation!");
        }

        Status = Status.NeedWork;
    }

    public void Delete()
    {
        if (IsDeleted)
        {
            throw new InvalidOperationException("Article is already deleted!");
        }

        IsDeleted = true;
    }

    public void AddRate(Guid userId, int value, string avatarName, DateTime operationDate, bool isAuthenticated)
    {
        if (Status != Status.Accepted)
        {
            throw new InvalidOperationException("Only accepted articles can be rated!");
        }

        if (Rates.Any(x => x.UserId == userId) || AnnonymousRates.Any(x => x.UserId == userId))
        {
            throw new InvalidOperationException("This article is already rated by user!");
        }

        if (isAuthenticated)
        {
            Rates.Add(new UserArticleRate(userId, value, avatarName, operationDate));
        }
        else
        {
            AnnonymousRates.Add(new AnnonymousArticleRate(userId, value, avatarName, operationDate));
        }
    }

    public void UpdateRate(Guid userId, int value, string avatarName, DateTime operationDate, bool isAuthenticated)
    {
        if (Status != Status.Accepted)
        {
            throw new InvalidOperationException("Only accepted articles can be rated!");
        }

        if (isAuthenticated)
        {
            var rate = Rates.FirstOrDefault(x => x.UserId == userId)
                ?? throw new InvalidOperationException("This article is not rated by user!");

            rate.Update(value, avatarName, operationDate);
        }
        else
        {
            var annonymousRate = AnnonymousRates.FirstOrDefault(x => x.UserId == userId)
                ?? throw new InvalidOperationException("This article is not rated by user!");

            annonymousRate.Update(value, avatarName, operationDate);
        }
    }

    public void RemoveRate(Guid userId, bool isAuthenticated)
    {
        if (Status != Status.Accepted)
        {
            throw new InvalidOperationException("Only accepted articles can be rated!");
        }

        if (isAuthenticated)
        {
            if (Rates.SingleOrDefault(x => x.UserId == userId) is var rate && rate is null)
            {
                throw new InvalidOperationException("This article is not rated by user!");
            }

            Rates.Remove(rate);
        }
        else
        {
            if (AnnonymousRates.SingleOrDefault(x => x.UserId == userId) is var rate && rate is null)
            {
                throw new InvalidOperationException("This article is not rated by user!");
            }

            AnnonymousRates.Remove(rate);
        }
    }

    public IEnumerable<KeyValuePair<string, double>> GetAverageRatingsByAvatars()
    {
        return Rates
            .Select(x => new { x.AvatarName, x.Value })
            .Concat(AnnonymousRates.Select(x => new { x.AvatarName, x.Value }))
            .GroupBy(x => x.AvatarName)
            .Select(x => new KeyValuePair<string, double>(x.Key, Math.Round(x.Average(v => v.Value), 1)));
    }

    public double GetAverageRating()
    {
        return Math.Round(Rates.Select(x => x.Value).Concat(AnnonymousRates.Select(x => x.Value)).Average(), 1);
    }

    public (string?, int?) GetCurrentUserRating(Guid userId)
    {
        var result = Rates
            .Where(x => x.UserId == userId)
            .Select(x => new { x.AvatarName, x.Value })
            .FirstOrDefault();

        result ??= AnnonymousRates
                .Where(x => x.UserId == userId)
                .Select(x => new { x.AvatarName, x.Value })
                .FirstOrDefault();

        return (result?.AvatarName, result?.Value);

    }

    public void AddReview(string reviewContent, Guid reviewerId, DateTime operationDate)
    {
        if (Status == Status.Draft)
        {
            throw new InvalidOperationException("Draft article cannot be reviewed!");
        }

        Reviews.Add(new Review(reviewerId, operationDate, reviewContent));
    }

    public void UpdateReview(Guid reviewId, string reviewContent, Guid reviewerId, DateTime operationDate)
    {
        var review = Reviews.FirstOrDefault(x => x.Id == reviewId && x.ReviewerId == reviewerId)
            ?? throw new InvalidOperationException("Review does not exists!");

        review.Update(reviewContent, operationDate);
    }

    public void DeleteReview(Guid reviewId, Guid reviewerId)
    {
        var review = Reviews.FirstOrDefault(x => x.Id == reviewId && x.ReviewerId == reviewerId)
            ?? throw new InvalidOperationException("Review does not exists!");

        Reviews.Remove(review);
    }

    public Review GetReview(Guid reviewId)
    {
        var review = Reviews.FirstOrDefault(x => x.Id == reviewId)
            ?? throw new InvalidOperationException("Review does not exists!");

        return review;
    }

    public IEnumerable<Review> GetReviews()
    {
        return Reviews
            .OrderByDescending(x => x.CreatedDate);
    }
}
