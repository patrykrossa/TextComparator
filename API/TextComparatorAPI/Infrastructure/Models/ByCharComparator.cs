using Domain.Interfaces;
using Domain.AdditionalStructures;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Models
{
    public class ByCharComparator : IComparator
    {
        private byte[] _file1;
        private byte[] _file2;
        private List<Difference> _differences;

        public ByCharComparator() {}

        public async Task ReceiveFiles(byte[] file1, byte[] file2)
        {
           _file1 = file1;
           _file2 = file2;
           _differences = new List<Difference>();
        }

        public async Task CompareFiles()
        {
            int startIndex = 0;
            int endIndex = 0;

            if (_file1.Length > _file2.Length)
            {
                for (int i = 0; i < _file2.Length; i++)
                {
                    if (_file1[i] != _file2[i])
                    {
                        startIndex = i;
                        endIndex = i;
                        for (int j = i + 1; j < _file2.Length; j++)
                        {
                            if (_file1[j] == _file2[j])
                            {
                                i = j;
                                break;
                            }
                            endIndex++;
                        }
                        if (endIndex == _file2.Length - 1)
                        {
                            i = _file2.Length;
                        }
                        _differences.Add(new Difference(startIndex, endIndex, endIndex - startIndex + 1));
                    }
                }
                _differences.Add(new Difference(endIndex, _file1.Length - 1, _file1.Length - endIndex));
            }
            else if (_file1.Length < _file2.Length)
            {
                for (int i = 0; i < _file1.Length; i++)
                {
                    if (_file1[i] != _file2[i])
                    {
                        startIndex = i;
                        endIndex = i;
                        for (int j = i + 1; j < _file1.Length; j++)
                        {
                            if (_file1[j] == _file2[j])
                            {
                                i = j;
                                break;
                            }
                            endIndex++;
                        }
                        if(endIndex == _file1.Length - 1)
                        {
                            i = _file1.Length;
                        }
                        _differences.Add(new Difference(startIndex, endIndex, endIndex - startIndex + 1));
                    }
                }
                _differences.Add(new Difference(endIndex, _file2.Length - 1, _file2.Length - endIndex));
            }
            else
            {
                for (int i = 0; i < _file1.Length; i++)
                {
                    if (_file1[i] != _file2[i])
                    {
                        startIndex = i;
                        endIndex = i;
                        for (int j = i + 1; j < _file1.Length; j++)
                        {
                            if (_file1[j] == _file2[j])
                            {
                                i = j;
                                break;
                            }
                            endIndex++;
                        }
                        if (endIndex == _file1.Length - 1)
                        {
                            i = _file1.Length;
                        }
                        _differences.Add(new Difference(startIndex, endIndex, endIndex - startIndex + 1));
                    }
                }
            }
            await Task.CompletedTask;
        }

        public async Task<List<Difference>> GetDifferences()
        {
            return _differences;
        }
    }
}
