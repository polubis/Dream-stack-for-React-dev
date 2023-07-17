
using GreenOnSoftware.Application.Services;

namespace GreenOnSoftware.UnitTests;

public class ArticleUrlIdentifierServiceTests
{
    [Theory]
    [InlineData("Siema", "siema")]
    [InlineData("¯ó³w", "zolw")]
    [InlineData("Nam strzelaæ nie kazano", "nam-strzelac-nie-kazano")]
    [InlineData("apostro'f i tyle", "apostro_f-i-tyle")]
    [InlineData(" za   du¿o   spacji \n  ", "za-duzo-spacji")]
    public void CreateArticleUrlIdentifier_ShouldReturnValidUrl(string title, string expectedUrl)
    {
        var service = new ArticleUrlIdentifierService();

        string url = service.CreateArticleUrlIdentifier(title);

        Assert.Equal(expectedUrl, url);
    }
}