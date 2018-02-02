using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TrackApi.Model.Track
{
    public class DbInitializer
    {
        public static void Initialize(TrackContext context)
        {
            context.Database.EnsureCreated();

            // Look for any students.
            if (context.Tracks.Any())
            {
                return;   // DB has been seeded
            }

            var t = new Track
            { Name = "Top Gear", TrackCode = "TOPGEAR" };
            context.Tracks.Add(t);

            var c = new Configuration
            {
                Name = "default",
                ConfigurationCode = "DEFAULT",
                Track = t
            };
            context.Configurations.Add(c);

            context.SaveChanges();


        }
    }
}
