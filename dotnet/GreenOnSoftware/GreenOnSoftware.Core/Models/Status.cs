using System.ComponentModel;

namespace GreenOnSoftware.Core.Models;

public enum Status
{
    [Description("Draft")]
    Draft = 0,
    [Description("Waiting for approval")]
    WaitingForApproval = 1,
    [Description("Need work")]
    NeedWork = 2,
    [Description("Accepted")]
    Accepted = 3
}
