using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Interfaces
{
    public interface IUsersRepository
    {
        public Task<SignedInUser> GetUserByIdAsync(Guid id);
        public Task<SignedInUser> GetUserByUsernameAsync(string username);
        public Task<SignedInUser> LoginUserAsync(string username, string password); 
        public Task RegisterAsync(SignedInUser userData);
        public Task UpdateUserAsync(SignedInUser updatedUser);
        public Task DeleteUserAsync(SignedInUser userToRemove);
    }
}
