using Application.Dtos.OutputFilesDtos;
using Application.Interfaces;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.ChangeTracking.Internal;
using static System.Net.Mime.MediaTypeNames;

namespace WebApi.Controllers
{
    [Route("outputFiles")]
    [ApiController]
    public class OutputFilesController : ControllerBase
    {
        private readonly IOutputFilesService _outputFilesService;
        private readonly IWebHostEnvironment _webHostEnvironment;
        public OutputFilesController(IOutputFilesService outputFilesService, IWebHostEnvironment webHostEnvironment)
        {
            _outputFilesService = outputFilesService;
            _webHostEnvironment = webHostEnvironment;
        }

        [HttpPost]
        public async Task<IActionResult> AddFile([FromForm] AddFileDto file)
        {
            string fileId = Guid.NewGuid().ToString();
            int fileSize = 0;
            string path = Path.Combine(_webHostEnvironment.WebRootPath, "Images", fileId + file.File.FileName );
            using (FileStream stream = new FileStream(path, FileMode.Create))
            {
                await file.File.CopyToAsync(stream);
                fileSize = (int)stream.Length;
                stream.Close();
            }

            var addedFile = await _outputFilesService.AddFile(file.File.FileName, path, file.UserId, fileSize);

            return Ok(addedFile);
        }

        [HttpGet]
        public async Task<IActionResult> GetUserFiles(Guid userId)
        {
            List<OutputFileDto> files = await _outputFilesService.GetUserFiles(userId);

            return Ok(files);
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteFile(Guid fileId)
        {
            await _outputFilesService.DeleteFile(fileId);
            return Ok();
        }
    }
}
