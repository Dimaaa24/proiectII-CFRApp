using Microsoft.EntityFrameworkCore;
using ProiectII.Business.Models;

namespace ProjectII.SqliteRepository
{
    public class CFRContext : DbContext
    {
        public DbSet<Train> Trains => Set<Train>();
        public DbSet<User> Users => Set<User>();
        public DbSet<Tickets> Tickets => Set<Tickets>();
        public DbSet<Routes> Routes => Set<Routes>();

        public CFRContext(DbContextOptions<CFRContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Routes>()
                .HasOne(r => r.Train)
                .WithMany(t => t.Routes)
                .HasForeignKey(r => r.TrainId);
            
            base.OnModelCreating(modelBuilder);
        }
    }
}
