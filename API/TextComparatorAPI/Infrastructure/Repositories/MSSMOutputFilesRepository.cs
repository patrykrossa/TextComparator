using Domain.Entities;
using Domain.Interfaces;
using Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Repositories
{
    public class MSSMOutputFilesRepository : IOutputFilesRepository
    {
        private readonly TextComparatorContext _textComparatorContext;
        public MSSMOutputFilesRepository(TextComparatorContext textComparatorContext) 
        {
            _textComparatorContext = textComparatorContext;
        }
        public async Task AddFile(OutputFile outputFile)
        {
            await _textComparatorContext.OutputFiles.AddAsync(outputFile);
            await _textComparatorContext.SaveChangesAsync();
            await Task.CompletedTask;
        }
    }
}
