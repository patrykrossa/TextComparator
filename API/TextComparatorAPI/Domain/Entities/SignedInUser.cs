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

        public ICollection<OutputFile> Files { get; set; }
    }
}
