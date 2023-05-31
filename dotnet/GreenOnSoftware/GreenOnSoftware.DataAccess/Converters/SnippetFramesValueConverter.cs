using GreenOnSoftware.Core.Models.Snippets;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Newtonsoft.Json;

namespace GreenOnSoftware.DataAccess.Converters;

internal class SnippetFramesValueConverter : ValueConverter<IList<SnippetFrame>, string>
{
    private static JsonSerializerSettings _jsonSerializerSettings = new JsonSerializerSettings {
        TypeNameHandling = TypeNameHandling.Auto,
        NullValueHandling = NullValueHandling.Ignore,
    };

    public SnippetFramesValueConverter()
        : base(frames => JsonConvert.SerializeObject(frames, _jsonSerializerSettings),
            json => JsonConvert.DeserializeObject<IList<SnippetFrame>>(json, _jsonSerializerSettings) ?? new List<SnippetFrame>(), null)
    {
    }
}
