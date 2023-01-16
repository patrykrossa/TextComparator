using Application.Dtos.OutputFilesDtos;
using Application.Interfaces;
using AutoMapper;
using Domain.Entities;
using Domain.Exceptions;
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
        public async Task<OutputFileDto> AddFile(AddFileDto file, string path)
        {
            var newFile = new OutputFile{
                Name = file.File.Name,
                Path = path,
                Size = (int)file.File.Length,
                UserId = file.UserId
                
                };

            await _outputFilesRepository.AddFile(newFile);

            return _mapper.Map<OutputFileDto>(file);
        }

        public async Task DeleteFile(Guid fileId)
        {
            var file = await _outputFilesRepository.DeleteFile(fileId);
            if (file is null)
            {
                throw new OutputFileNotFoundException(fileId);
                
            }

            File.Delete(file.Path);
            await Task.CompletedTask;

        }

        public async Task<OutputFileDto> GetFileById(Guid fileId)
        {
            var file = await _outputFilesRepository.GetFileById(fileId);
            if (file is null)
            {
                throw new OutputFileNotFoundException(fileId);
            }

            return _mapper.Map<OutputFileDto>(file);
        }

        public async Task<List<OutputFileDto>> GetUserFiles(Guid userId)
        {
            var files =  await _outputFilesRepository.GetUserFiles(userId);
            return _mapper.Map<List<OutputFileDto>>(files);
        }

        public async Task<OutputFileDto> UpdateFile(UpdateFileDto file, string path)
        {
            var fileToUpdate = await _outputFilesRepository.GetFileById(file.FileId);

            fileToUpdate.Size = (int)file.File.Length;
            fileToUpdate.Name = file.File.FileName;
            fileToUpdate.Path = path;

            await _outputFilesRepository.UpdateFile(fileToUpdate);

            
            return _mapper.Map<OutputFileDto>(fileToUpdate); 


        }


    }
}
