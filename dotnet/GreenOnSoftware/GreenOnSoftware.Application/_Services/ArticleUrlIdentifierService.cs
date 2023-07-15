using GreenOnSoftware.Application.Services.Interfaces;
using GreenOnSoftware.Commons.Extensions;
using System.Text.RegularExpressions;

namespace GreenOnSoftware.Application.Services;

public class ArticleUrlIdentifierService : IArticleUrlIdentifierService
{
    public string CreateArticleUrlIdentifier(string title)
    {
        string[] words = title
            .ToLowerWithoutPolishLetters()
            .Split(' ', StringSplitOptions.TrimEntries | StringSplitOptions.RemoveEmptyEntries);

        title = string.Join('-', words);

        Regex rgx = new Regex("[^a-z0-9-]");

        return rgx.Replace(title, "_");
    }
}
