using Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public record SignedInUser : AuditableEntity
    {
        public Guid Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public bool GoldenPacket { get; set; }
        public bool DiamondPacket { get; set; }
        public ICollection<OutputFile> Files { get; set; }
    }
}
