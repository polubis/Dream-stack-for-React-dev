using GreenOnSoftware.Application.Serialization;
using GreenOnSoftware.Core.Enums;
using System.Text.Json.Serialization;

namespace GreenOnSoftware.Application.Articles.GetArticlesQuery;

public class ArticleLookupDto
{
    public Guid Id { get; set; }
    public string Title { get; set; }
    public string? Description { get; set; }
    public string AuthorEmail { get; set; }
    public string AuthorName { get; set; }
    public string? ThumbnailUrl { get; set; }
    public string Status { get; set; }
    public string Url { get; set; }

    [JsonConverter(typeof(LanguageToTextConverter))]
    public Language Lang { get; set; }

    public string[] Tags { get; set; }
}
