﻿using Application.Dtos.OutputFilesDtos;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Interfaces
{
    public interface IOutputFilesService
    {
        public Task<OutputFileDto> AddFile(string fileName, string path, Guid UserId, int size);
        public Task<List<OutputFileDto>> GetUserFiles(Guid userId);
        public Task DeleteFile(Guid fileId);
    }
}
