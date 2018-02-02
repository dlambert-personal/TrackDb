using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace TrackApi.Model.Track
{
    public class TrackContext : DbContext
    {
        public TrackContext(DbContextOptions<TrackContext> options) : base(options)
        {
        }

        public DbSet<Configuration> Configurations { get; set; }
        public DbSet<Track> Tracks { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<Configuration>().ToTable("track.Configuration");
            //modelBuilder.Entity<Track>().ToTable("track.Track");
        }
    }
}
