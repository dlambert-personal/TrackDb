using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TrackApi.Model.Track;
using Microsoft.EntityFrameworkCore;

namespace TrackApi.Controllers
{
    [Produces("application/json")]
    [Route("api/Track")]
    public class TrackController : Controller
    {
        private readonly TrackContext _context;

        public TrackController(TrackContext context)
        {
            _context = context;
        }


        // GET: api/Track
        [HttpGet]
        public IEnumerable<Track> Get()
        {
            var res = _context.Tracks
                .Include(t => t.Configurations)
                .ToList();
            return res;   
        }

        // GET: api/Track/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }
        
        // POST: api/Track
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }
        
        // PUT: api/Track/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }
        
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
