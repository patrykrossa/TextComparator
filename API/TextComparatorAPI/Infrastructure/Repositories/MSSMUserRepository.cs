using Domain.Entities;
using Domain.Exceptions;
using Domain.Interfaces;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Repositories
{
    public class MSSMUserRepository : IUsersRepository
    {
        private readonly TextComparatorContext _context;

        public MSSMUserRepository(TextComparatorContext context)
        {
            _context = context;
        }

        public async Task<SignedInUser> GetUserByIdAsync(Guid id)
        {
            return await _context.Users.SingleOrDefaultAsync(u => u.Id == id);
        }

        public async Task<SignedInUser> GetUserByUsernameAsync(string username)
        {
            return await _context.Users.SingleOrDefaultAsync(u => u.Username == username);
        }

        public async Task<SignedInUser> LoginUserAsync(string username, string password)
        {
            return await _context.Users.SingleOrDefaultAsync(u => u.Username == username && u.Password == password);
        }

        public async Task RegisterAsync(SignedInUser userData)
        { 
            await _context.Users.AddAsync(userData);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateUserAsync(SignedInUser updatedUser)
        {
            _context.Users.Update(updatedUser);
            await _context.SaveChangesAsync();
        }
        public async Task DeleteUserAsync(SignedInUser userToRemove)
        {
            _context.Users.Remove(userToRemove);
            await _context.SaveChangesAsync();
        }

    }
}
