using GreenOnSoftware.Commons.Extensions;
using GreenOnSoftware.Core.Enums;
using GreenOnSoftware.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GreenOnSoftware.DataAccess.Configuration;

public class ArticleConfiguration : IEntityTypeConfiguration<Article>
{
    public void Configure(EntityTypeBuilder<Article> builder)
    {
        builder.HasKey(x => x.Id);

        builder.Property(x => x.Title)
            .IsRequired()
            .HasMaxLength(200);

        builder.Property(x => x.Status)
            .IsRequired()
            .HasConversion(x => x.ToString(), x => x.ToEnum<Status>());

        builder.Property(x => x.Content)
            .IsRequired();

        builder.Property(x => x.Description)
            .HasMaxLength(500);

        builder.Property(x => x.Url)
            .IsRequired()
            .HasMaxLength(300);

        builder.Property(x => x.ThumbnailUrl)
            .HasMaxLength(300);

        builder.HasOne(x => x.Author)
            .WithMany()
            .HasForeignKey(x=>x.AuthorId)
            .OnDelete(DeleteBehavior.SetNull);
    }
}
