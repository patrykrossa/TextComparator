using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.IdentityModel.SecurityTokenService;
using Microsoft.Net.Http.Headers;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using WebApi.Filters;
using WebApi.Helpers;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("comparator")]
    public class ComparatorController : ControllerBase
    {
        private const long MaxFileSize = 2L * 1024L * 1024L * 1024L;
        private byte[] _file1;
        private byte[] _file2;

        [HttpPost]
        [DisableFormValueModelBinding]
        [RequestSizeLimit(MaxFileSize)]
        [RequestFormLimits(MultipartBodyLengthLimit = MaxFileSize)]
        public async Task<IActionResult> UploadFile()
        {
            var boundary = HeaderUtilities.RemoveQuotes(MediaTypeHeaderValue.Parse(Request.ContentType).Boundary).Value;

            var reader = new MultipartReader(boundary, Request.Body);

            var section = await reader.ReadNextSectionAsync();



            if (section == null)
                return BadRequest();

            var hasContentDispositionHeader = ContentDispositionHeaderValue.TryParse(section.ContentDisposition, out var contentDisposition);
            if (hasContentDispositionHeader)
            {
                if (contentDisposition.DispositionType.Equals("form-data") &&
                (!string.IsNullOrEmpty(contentDisposition.FileName.Value) ||
                !string.IsNullOrEmpty(contentDisposition.FileNameStar.Value)))
                {
                    byte[] fileArray;
                    using (var memoryStream = new MemoryStream())
                    {
                        await section.Body.CopyToAsync(memoryStream);
                        fileArray = memoryStream.ToArray();
                    }
                    _file1 = fileArray;
                }
            }

            var section2 = await reader.ReadNextSectionAsync();
            if (section2 == null)
                return BadRequest();

            var hasContentDispositionHeader2 = ContentDispositionHeaderValue.TryParse(section2.ContentDisposition, out var contentDisposition2);
            if (hasContentDispositionHeader2)
            {
                if (contentDisposition2.DispositionType.Equals("form-data") &&
                (!string.IsNullOrEmpty(contentDisposition2.FileName.Value) ||
                !string.IsNullOrEmpty(contentDisposition2.FileNameStar.Value)))
                {
                    byte[] fileArray;
                    using (var memoryStream = new MemoryStream())
                    {
                        await section2.Body.CopyToAsync(memoryStream);
                        fileArray = memoryStream.ToArray();
                    }
                    _file2 = fileArray;
                }
            }

            return Ok();
        }
    }
}
