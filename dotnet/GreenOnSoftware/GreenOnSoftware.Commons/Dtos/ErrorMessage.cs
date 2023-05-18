namespace GreenOnSoftware.Commons.Dtos;

public class ErrorMessage
{
    public ErrorMessage(string key, string message)
    {
        Key = key;
        Message = message;
    }

    public string Key { get; set; }
    public string Message { get; set; }
}

