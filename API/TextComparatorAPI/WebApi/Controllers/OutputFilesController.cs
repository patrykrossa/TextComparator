using Application.Dtos.OutputFilesDtos;
using Application.Interfaces;
using Microsoft.AspNetCore.Mvc;

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
            string path = Path.Combine(_webHostEnvironment.WebRootPath, "Images", fileId + file.File.FileName );
            using (FileStream stream = new FileStream(path, FileMode.Create))
            {
                await file.File.CopyToAsync(stream);
                stream.Close();
            }

            var addedFile = await _outputFilesService.AddFile(file, path);

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
            return Ok("File has been succesfully deleted");
        }

        [HttpPut]
        public async Task<IActionResult> UpdateFile([FromForm] UpdateFileDto file)
        {
            var fileToUpdate = await _outputFilesService.GetFileById(file.FileId);
            System.IO.File.Delete(fileToUpdate.Path);
            string fileId = Guid.NewGuid().ToString();
            string path = Path.Combine(_webHostEnvironment.WebRootPath, "Images", fileId + file.File.FileName);
            using (FileStream stream = new FileStream(path, FileMode.Create))
            {
                await file.File.CopyToAsync(stream);
                stream.Close();
            }

            var updatedFile = await _outputFilesService.UpdateFile(file, path);
            return Ok(updatedFile);
        }
    }
}
