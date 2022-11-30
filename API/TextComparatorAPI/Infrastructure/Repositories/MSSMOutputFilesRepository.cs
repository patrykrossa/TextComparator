using Domain.Entities;
using Domain.Interfaces;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
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

        public async Task<OutputFile> DeleteFile(Guid fileId)
        {
            var fileToDelete = await _textComparatorContext.OutputFiles.FirstOrDefaultAsync(f => f.Id == fileId);
            if (fileToDelete != null) 
            {
                _textComparatorContext.OutputFiles.Remove(fileToDelete);
                await _textComparatorContext.SaveChangesAsync();     
            }

            return fileToDelete;

        }

        public async Task<List<OutputFile>> GetUserFiles(Guid userId)
        {
            return await _textComparatorContext.OutputFiles.Where(f => userId == f.UserId).ToListAsync();
        }
    }
}
