using Application.Dtos.UserDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Interfaces
{
    public interface IUsersService
    {
        Task<UserDto> RegisterAsync(RegisterDto userData);
        Task<UserDto> LoginAsync(LoginDto credentials);
        Task<UserDto> GetUserByIdAsync(Guid id);
        Task<UserDto> UpdateUserAsync(UpdateUserDto updatedUser, Guid id);
        Task DeleteUserAsync(Guid id);
    }
}
