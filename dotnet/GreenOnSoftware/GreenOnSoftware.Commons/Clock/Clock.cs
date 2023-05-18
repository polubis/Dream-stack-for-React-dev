namespace GreenOnSoftware.Commons.Clock;

public class Clock : IClock
{
    public DateTime UtcNow => DateTime.UtcNow;
}