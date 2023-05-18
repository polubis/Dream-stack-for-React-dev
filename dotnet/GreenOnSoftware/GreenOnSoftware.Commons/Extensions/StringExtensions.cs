namespace GreenOnSoftware.Commons.Extensions;

public static class StringExtensions
{
    public static T ToEnum<T>(this string description) where T : Enum
    {
        return (T)Enum.Parse(typeof(T), description, true);
    }
}
