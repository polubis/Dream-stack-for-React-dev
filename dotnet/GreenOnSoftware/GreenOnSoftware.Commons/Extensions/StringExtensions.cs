namespace GreenOnSoftware.Commons.Extensions;

public static class StringExtensions
{
    private static Dictionary<char, char> _polishLettersConversions = new Dictionary<char, char> {
            { 'ą', 'a' },
            { 'ć', 'c' },
            { 'ę', 'e' },
            { 'ł', 'l' },
            { 'ó', 'o' },
            { 'ń', 'n' },
            { 'ś', 's' },
            { 'ź', 'z' },
            { 'ż', 'z' }
        };

    public static string ToLowerWithoutPolishLetters(this string text)
    {
        var arr = text.ToLower().ToCharArray();

        for (int i = 0; i < arr.Length; i++)
        {
            if (_polishLettersConversions.ContainsKey(arr[i]))
            {
                arr[i] = _polishLettersConversions[arr[i]];
            }
        }

        return new string(arr);
    }

    public static T ToEnum<T>(this string description) where T : Enum
    {
        return (T)Enum.Parse(typeof(T), description, ignoreCase: true);
    }
}
