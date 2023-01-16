using Application.Interfaces;
using Domain.AdditionalStructures;
using Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services
{
    public class ComparatorService : IComparatorService
    {
        private IComparator _comparator;
        public ComparatorService(IComparator comparator)
        {
            _comparator = comparator;
        }

        public async Task ReceiveFiles(byte[] file1, byte[] file2)
        {
            await _comparator.ReceiveFiles(file1, file2);
        }

        public async Task CompareFiles()
        {
            await _comparator.CompareFiles();
        }

        public async Task<List<Difference>> GetDifferences()
        {
            return await _comparator.GetDifferences();
        }
    }
}
