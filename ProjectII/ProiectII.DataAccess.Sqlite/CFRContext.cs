﻿using Microsoft.EntityFrameworkCore;
using ProiectII.BusinessModels.Models;

namespace ProjectII.DataAccess.Sqlite
{
    public class CFRContext : DbContext
    {
        public DbSet<Train> Trains { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Tickets> Tickets { get; set; }
        public DbSet<Routes> Routes { get; set; }

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
