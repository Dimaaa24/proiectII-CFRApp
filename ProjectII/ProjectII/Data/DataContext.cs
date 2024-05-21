using Microsoft.EntityFrameworkCore;

namespace ProjectII.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }

        public DbSet<Train> Trains => Set<Train>();
        public DbSet<User> Users => Set<User>(); 
        public DbSet<Tickets> Tickets => Set<Tickets>();
        public DbSet<Routes> Routes => Set<Routes>();

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
