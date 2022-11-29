using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Dtos
{
    public class AddFileDto
    {
        public IFormFile File { get; set; }
        public Guid UserId { get; set; }
    }
}
