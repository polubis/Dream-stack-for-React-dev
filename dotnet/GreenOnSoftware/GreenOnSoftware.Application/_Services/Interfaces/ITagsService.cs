using GreenOnSoftware.Core.Models;

namespace GreenOnSoftware.Application.Services.Interfaces;

public interface ITagsService
{
    Task<List<Tag>> ConvertToValidTagsAsync(string[] tags);
}