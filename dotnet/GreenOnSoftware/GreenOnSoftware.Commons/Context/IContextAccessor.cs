namespace GreenOnSoftware.Commons.Context;

public interface IContextAccessor
{
    IContext? Context { get; set; }
}
