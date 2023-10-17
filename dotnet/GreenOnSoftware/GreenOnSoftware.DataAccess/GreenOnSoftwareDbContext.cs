using GreenOnSoftware.Core.Identity;
using GreenOnSoftware.Core.Models;
using GreenOnSoftware.Core.Models.Reviews;
using GreenOnSoftware.Core.Models.Snippets;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace GreenOnSoftware.DataAccess
{
    public class GreenOnSoftwareDbContext
        : IdentityDbContext<User, IdentityRole<Guid>, Guid, IdentityUserClaim<Guid>, UserRole, IdentityUserLogin<Guid>, IdentityRoleClaim<Guid>, IdentityUserToken<Guid>>
    {
        public GreenOnSoftwareDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Article> Articles { get; set; }
        public DbSet<Review> Reviews { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Snippet> Snippets { get; set; }
        public DbSet<Tag> Tags { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfigurationsFromAssembly(typeof(GreenOnSoftwareDbContext).Assembly);

          
            modelBuilder
                .Entity<IdentityRoleClaim<Guid>>()
                .ToTable("RoleClaims");
                      
            modelBuilder
                .Entity<IdentityRole<Guid>>()
                .ToTable("Roles");

            modelBuilder
                .Entity<IdentityUserClaim<Guid>>()
                .ToTable("UserClaims");

            modelBuilder
                .Entity<IdentityUserLogin<Guid>>()
                .ToTable("UserLogins");

            modelBuilder
              .Entity<IdentityUserToken<Guid>>()
              .ToTable("UserTokens");
        }
    }
}