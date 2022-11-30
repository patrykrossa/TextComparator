using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Dtos.OutputFilesDtos
{
    public class UpdateFileDto
    {
        public IFormFile File { get; set; }
        public Guid FileId { get; set; }
    }
}
