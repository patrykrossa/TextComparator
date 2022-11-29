﻿using Domain.Common;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public record OutputFile : AuditableEntity
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Path { get; set; }

        public Guid UserId { get; set; }
        public SignedInUser User { get; set; }
    }
}
