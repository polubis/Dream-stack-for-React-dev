using System.ComponentModel;

namespace GreenOnSoftware.Commons.Extensions;

public static class EnumExtensions
{
    public static string Description(Enum item)
    {
        var enumValue = item.ToString();
        var field = item.GetType().GetField(enumValue);
        var attribute = ((DescriptionAttribute[])field!.GetCustomAttributes(typeof(DescriptionAttribute), false)).FirstOrDefault();

        return attribute?.Description ?? enumValue;
    }
}