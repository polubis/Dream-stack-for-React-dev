using GreenOnSoftware.Application.Services.Interfaces;
using GreenOnSoftware.Core.Enums;
using GreenOnSoftware.Core.Models;
using GreenOnSoftware.DataAccess;
using Microsoft.EntityFrameworkCore;

namespace GreenOnSoftware.Application.Services;

public class TagsService : ITagsService
{
    private readonly GreenOnSoftwareDbContext _dbContext;

    public TagsService(GreenOnSoftwareDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<List<Tag>> GetAllUniqueTagsAsync()
    {
        return await _dbContext
            .Tags
            .Where(x=>x.Articles.Any(a=>!a.IsDeleted && a.Status == Status.Accepted))
            .ToListAsync();
    }

    public async Task<List<Tag>> ConvertToValidTagsAsync(string[] tags)
    {
        IEnumerable<Tag> existingTags = await GetAllUniqueTagsAsync();

        existingTags = existingTags
            .Where(x => tags.Any(y => y.Equals(x.Name, StringComparison.OrdinalIgnoreCase)));

        IEnumerable<Tag> newTags = tags
            .Where(x => !existingTags.Any(y => y.Name.Equals(x, StringComparison.OrdinalIgnoreCase)))
            .Select(x => new Tag(x));

        return existingTags
            .Concat(newTags)
            .ToList();
    }

    public async Task DeleteUnusedTagsAsync()
    {
        var tags = await _dbContext.Tags
            .Where(x => !x.Articles.Any())
            .ToListAsync();

        _dbContext.Tags.RemoveRange(tags);

        await _dbContext.SaveChangesAsync();
    }
}