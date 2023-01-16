using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Exceptions
{
    public sealed class OutputFileNotFoundException : NotFoundException
    {
        public OutputFileNotFoundException(Guid fileId) : base($"File with id {fileId} doesn't exist.")
        {
        }
    }
}
