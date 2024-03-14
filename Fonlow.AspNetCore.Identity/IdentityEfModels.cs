using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace Fonlow.AspNetCore.Identity.EntityFrameworkCore
{
	public class ApplicationRoleStore : RoleStore<ApplicationIdentityRole, ApplicationDbContext, Guid>
	{
		public ApplicationRoleStore(ApplicationDbContext context, IdentityErrorDescriber describer = null) : base(context, describer) { }
	}

	public class ApplicationUserStore : UserStore<ApplicationUser, ApplicationIdentityRole, ApplicationDbContext, Guid>
	{
		public ApplicationUserStore(ApplicationDbContext context, IdentityErrorDescriber describer = null) : base(context, describer) { }
	}

	/// <summary>
	/// Db context for creating and managing tables for various authentication schems.
	/// </summary>
	public class ApplicationDbContext : IdentityDbContext<ApplicationUser, ApplicationIdentityRole, Guid>
	{
		public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
					: base(options)
		{
		}

		/// <summary>
		/// make table aspnetuserroles visible in context
		/// </summary>
		public override DbSet<IdentityUserRole<Guid>> UserRoles { get; set; }

		/// <summary>
		/// For shorter key length of MySql
		/// </summary>
		/// <param name="modelBuilder"></param>
		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.UseCollation("utf8_general_ci"); //case insensitive
			base.OnModelCreating(modelBuilder);

			modelBuilder.Entity<ApplicationIdentityRole>()
				.Property(c => c.Name).HasMaxLength(128).IsRequired();

			modelBuilder.Entity<ApplicationUser>()//.ToTable("AspNetUsers")//I have to declare the table name, otherwise IdentityUser will be created
				.Property(c => c.UserName).HasMaxLength(128).IsRequired();


		}

		void UpdateStamps()
		{
			IEnumerable<EntityEntry> addedEntities = ChangeTracker.Entries().Where(x => x.Entity is ITrackableEntity && (x.State == EntityState.Added));
			IEnumerable<EntityEntry> modifiedEntities = ChangeTracker.Entries().Where(x => x.Entity is ITrackableEntity && (x.State == EntityState.Modified));

			DateTime nowUtc = DateTime.UtcNow;

			foreach (EntityEntry item in addedEntities)
			{
				(item.Entity as ITrackableEntity).CreatedUtc = nowUtc;
				(item.Entity as ITrackableEntity).ModifiedUtc = nowUtc;
			}

			foreach (EntityEntry item in modifiedEntities)
			{
				(item.Entity as ITrackableEntity).ModifiedUtc = nowUtc;
			}

		}

		public override int SaveChanges()
		{
			UpdateStamps();
			return base.SaveChanges();
		}

		public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default) //no need to override Task<int> SaveChangesAsync()
		{
			UpdateStamps();
			return base.SaveChangesAsync(cancellationToken);
		}
	}


}
