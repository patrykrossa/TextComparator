using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Exceptions
{
    public sealed class UsernameTakenException : BadRequestException
    {
        public UsernameTakenException(string Username) : base($"Username {Username} is already taken.")
        {
        }
    }
}
