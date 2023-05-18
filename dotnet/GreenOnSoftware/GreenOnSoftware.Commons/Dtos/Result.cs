using Serilog;

namespace GreenOnSoftware.Commons.Dtos;


public class Result<T> : Result
{
    public void SetData(T data)
    {
        Data = data;
    }

    public T Data { get; private set; }

}

public class Result
{
    public bool Success => Errors.Count == 0;
    public bool HasErrors => !Success;

    public List<ErrorMessage> Errors { get; } = new List<ErrorMessage>();

    public Result()
    {

    }

    public Result(string error)
    {
        AddErrorWithLogging(error);
    }

    public Result(Dictionary<string, string> errors)
    {
        Errors.AddRange(errors.Select(x => new ErrorMessage(x.Key, x.Value)));
    }

    public void AddErrorWithLogging(string key, string message)
    {
        Log.Error(message);
        AddError(key, message);
    }    

    public void AddError(string key, string message)
    {
        Errors.Add(new ErrorMessage(key, message));
    }

    public void AddErrorWithLogging(string message)
    {
        AddErrorWithLogging("general", message);
    }

    public void AddErrorWithLogging(Exception e, string message)
    {
        Log.Error(e, message);
        AddError("general", message);
    }

    public void AddError(string message)
    {
        AddError("general", message);
    }

    public void AddErrors(IEnumerable<string> messages)
    {
        Errors.AddRange(messages.Select(x => new ErrorMessage("general", x)));
    }

    public void AddErrorsWithLogging(IEnumerable<string> messages)
    {
        foreach (var message in messages)
        {
            AddErrorWithLogging(message);
        }
    }

    public void AddErrors(Result result)
    {
        Errors.AddRange(result.Errors);
    }
}


