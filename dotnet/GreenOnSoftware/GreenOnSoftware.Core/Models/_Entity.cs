using Microsoft.AspNetCore.Identity;

namespace GreenOnSoftware.Core.Models;

public abstract class Entity
{
    public Guid Id { get; set; }
}