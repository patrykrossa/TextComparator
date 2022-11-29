using Application.Dtos;
using Application.Interfaces;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
            string path = Path.Combine(_webHostEnvironment.WebRootPath, "Images", fileId + file.File.FileName );
            using (FileStream stream = new FileStream(path, FileMode.Create))
            {
                await file.File.CopyToAsync(stream);
                stream.Close();
            }

            var addedFile = await _outputFilesService.AddFile(file.File.FileName, path, file.UserId);

            return Ok(addedFile);
        }
    }
}
