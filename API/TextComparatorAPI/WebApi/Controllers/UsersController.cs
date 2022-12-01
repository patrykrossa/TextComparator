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
           var user = await _usersService.Register(newUser);
           return Ok(user);
        }
        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDto credentials)
        {
            var user = await _usersService.Login(credentials);
            return Ok(user);
        }
    }
}
