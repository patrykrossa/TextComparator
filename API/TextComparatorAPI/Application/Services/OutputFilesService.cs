using Application.Dtos;
using Application.Interfaces;
using AutoMapper;
using Domain.Entities;
using Domain.Interfaces;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services
{
    public class OutputFilesService : IOutputFilesService
    {
        private readonly IOutputFilesRepository _outputFilesRepository;
        private readonly IMapper _mapper;
        public OutputFilesService(IOutputFilesRepository outputFilesRepository, IMapper mapper)
        { 
            _outputFilesRepository = outputFilesRepository;
            _mapper = mapper;
        }
        public async Task<OutputFileDto> AddFile(string fileName, string path, Guid UserId)
        {
            var file = new OutputFile{
                Name = fileName,
                Path = path,
                UserId = UserId
                };

            await _outputFilesRepository.AddFile(file);

            return _mapper.Map<OutputFileDto>(file);
        }
    }
}
