using Microsoft.EntityFrameworkCore;

namespace ProjectII.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }

        public DbSet<Train> Trains => Set<Train>();
    }
}
