using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Interfaces
{
    public interface IOutputFilesRepository
    {
        public Task AddFile(OutputFile outputFile);

        public Task<List<OutputFile>> GetUserFiles(Guid userId);
        public Task<OutputFile> DeleteFile(Guid fileId);
    }
}
