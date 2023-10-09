using GreenOnSoftware.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GreenOnSoftware.DataAccess.Configuration;

public class ArticleTagConfiguration : IEntityTypeConfiguration<ArticleTag>
{
    public void Configure(EntityTypeBuilder<ArticleTag> builder)
    {
        builder.HasKey(x => new { x.TagId, x.ArticleId });
    
        builder.HasOne(x => x.Tag)
            .WithMany()
            .IsRequired()
            .HasForeignKey(x => x.TagId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
