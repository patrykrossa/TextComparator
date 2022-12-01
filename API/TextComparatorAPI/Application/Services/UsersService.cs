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

        public async Task<UserDto> Register(RegisterDto userData)
        {
            if (await _repository.GetUserByUsernameAsync(userData.Username) != null)
                throw new UsernameTakenException(userData.Username);

            var newUser = _mapper.Map<SignedInUser>(userData);
            await _repository.RegisterAsync(newUser);

            return _mapper.Map<UserDto>(newUser);
        }
        
        public async Task<UserDto> Login(LoginDto credentials)
        {
            var user = await _repository.LoginUserAsync(credentials.Username, credentials.Password);

            if (user == null)
                throw new InvalidCredentialsException();

            return _mapper.Map<UserDto>(user);
        }
    }
}
