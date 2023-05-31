using GreenOnSoftware.Core.Models.Ratings;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GreenOnSoftware.DataAccess.Configuration;

public class UserRateConfiguration : IEntityTypeConfiguration<UserArticleRate>
{
    public void Configure(EntityTypeBuilder<UserArticleRate> builder)
    {
        builder.HasKey(x => x.Id);

        builder.Property(x => x.AvatarName)
            .HasMaxLength(100)
            .IsRequired();

        builder.Property(x => x.Value)
            .IsRequired();

        builder.HasOne(x => x.User)
            .WithMany()
            .HasForeignKey(x => x.UserId)
            .OnDelete(DeleteBehavior.SetNull);

        builder.HasOne(x => x.Article)
            .WithMany(x=>x.Rates)
            .HasForeignKey(x => x.ArticleId)
            .OnDelete(DeleteBehavior.Cascade);

        builder.ToTable("UserArticleRates");
    }
}
