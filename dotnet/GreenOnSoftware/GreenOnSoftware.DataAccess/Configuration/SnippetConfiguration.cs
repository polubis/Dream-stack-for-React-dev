using GreenOnSoftware.Core.Models.Snippets;
using GreenOnSoftware.DataAccess.Converters;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GreenOnSoftware.DataAccess.Configuration;

public class SnippetConfiguration : IEntityTypeConfiguration<Snippet>
{
    public void Configure(EntityTypeBuilder<Snippet> builder)
    {
        builder.HasKey(x => x.Id);

        builder.Property(x => x.Name)
            .HasMaxLength(200)
            .IsRequired();

        builder.Property(x => x.Description)
            .HasMaxLength(500)
            .IsRequired();

        builder.Property(x => x.GifUrl)
            .HasMaxLength(300)
            .IsRequired();

        builder.Property(x => x.Frames)
            .HasConversion<SnippetFramesValueConverter>();

        builder.ToTable("Snippets");
    }
}
