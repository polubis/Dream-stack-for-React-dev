using GreenOnSoftware.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GreenOnSoftware.DataAccess.Configuration;

public class AnnonymousRateConfiguration : IEntityTypeConfiguration<AnnonymousArticleRate>
{
    public void Configure(EntityTypeBuilder<AnnonymousArticleRate> builder)
    {
        builder.HasKey(x => x.Id);

        builder.Property(x => x.AvatarName)
            .HasMaxLength(100)
            .IsRequired();

        builder.Property(x => x.Value)
            .IsRequired();

        builder.Property(x => x.UserId)
            .IsRequired();

        builder.HasOne(x => x.Article)
            .WithMany(x=>x.AnnonymousRates)
            .HasForeignKey(x => x.ArticleId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.ToTable("AnnonymousArticleRates");
    }
}
