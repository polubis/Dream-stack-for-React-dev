using GreenOnSoftware.Core.Enums;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace GreenOnSoftware.Application.Serialization;

internal class LanguageToTextConverter : JsonConverter<Language>
{
    public override Language Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        throw new NotImplementedException();
    }

    public override void Write(Utf8JsonWriter writer, Language value, JsonSerializerOptions options)
    {
        writer.WriteStringValue(value.ToString().ToLower());
    }
}
