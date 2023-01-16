using Domain.AdditionalStructures;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Interfaces
{
    public interface IComparatorService
    {
        public Task ReceiveFiles(byte[] file1, byte[] file2);
        public Task CompareFiles();
        public Task<List<Difference>> GetDifferences();
    }
}
