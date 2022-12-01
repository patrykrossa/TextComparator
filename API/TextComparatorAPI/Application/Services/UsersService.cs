using Application.Dtos.UserDtos;
using Application.Interfaces;
using AutoMapper;
using Domain.Entities;
using Domain.Exceptions;
using Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services
{
    public class UsersService : IUsersService
    {
        private readonly IUsersRepository _repository;
        private readonly IMapper _mapper;

        public UsersService(IUsersRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<UserDto> RegisterAsync(RegisterDto userData)
        {
            if (await _repository.GetUserByUsernameAsync(userData.Username) != null)
                throw new UsernameTakenException(userData.Username);

            var newUser = _mapper.Map<SignedInUser>(userData);
            await _repository.RegisterAsync(newUser);

            return _mapper.Map<UserDto>(newUser);
        }
        
        public async Task<UserDto> LoginAsync(LoginDto credentials)
        {
            var user = await _repository.LoginUserAsync(credentials.Username, credentials.Password);

            if (user == null)
                throw new InvalidCredentialsException();

            return _mapper.Map<UserDto>(user);
        }
        public async Task<UserDto> GetUserByIdAsync(Guid id)
        {
            var user = await _repository.GetUserByIdAsync(id);

            if (user == null)
                throw new UserNotFoundException(id);

            return _mapper.Map<UserDto>(user);
        }

        public async Task<UserDto> UpdateUserAsync(UpdateUserDto updatedUser, Guid id)
        {
            var user = await _repository.GetUserByIdAsync(id);

            if (user == null)
                throw new UserNotFoundException(id);

            var newUser = _mapper.Map(updatedUser, user);
            await _repository.UpdateUserAsync(newUser);

            return _mapper.Map<UserDto>(_mapper.Map<UserDto>(newUser));
        }

        public async Task DeleteUserAsync(Guid id)
        {
            var user = await _repository.GetUserByIdAsync(id);

            if (user == null)
                throw new UserNotFoundException(id);

            await _repository.DeleteUserAsync(user);
        }
    }
}
