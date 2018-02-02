using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TrackApi.Model.Track
{
    [Table("Configuration", Schema = "track")]
    public class Configuration
    {
        public int ID { get; set; }
        public int TrackID { get; set; }
        public string ConfigurationCode { get; set; }
        public string Name { get; set; }

        public Track Track { get; set; }
    }
}
