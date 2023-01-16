using Application.Dtos.OutputFilesDtos;
using Application.Dtos.UserDtos;
using Application.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Runtime.InteropServices;

namespace WebApi.Controllers
{
    [Route("users")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUsersService _usersService;

        public UsersController(IUsersService usersService)
        {
            _usersService = usersService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterDto newUser)
        {
           var user = await _usersService.RegisterAsync(newUser);
           return Ok(user);
        }
        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDto credentials)
        {
            var user = await _usersService.LoginAsync(credentials);
            return Ok(user);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(Guid id)
        {
            var user = await _usersService.GetUserByIdAsync(id);

            return Ok(user);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(UpdateUserDto updatedUser, Guid id)
        {
            var user = await _usersService.UpdateUserAsync(updatedUser, id);

            return Ok(user);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            await _usersService.DeleteUserAsync(id);
            return Ok();
        }
    }
}
