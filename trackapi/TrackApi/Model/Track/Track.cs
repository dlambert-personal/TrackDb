using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TrackApi.Model.Track
{
    [Table("Track", Schema = "track")]
    public class Track
    {
        public int ID { get; set; }
        public string TrackCode { get; set; }
        public string Name { get; set; }

        public ICollection<Configuration> Configurations { get; set; }
    }
}
