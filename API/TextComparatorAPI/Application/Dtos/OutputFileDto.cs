using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Dtos
{
    public record OutputFileDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Path { get; set; }

        public OutputFileDto(Guid id, string name, string path) 
        {
            Id = id;
            Name = name;
            Path = path;
        }
    }
}
