using System;

namespace Store.Models
{
    public class RegistException : Exception
    {
        public RegistException()
        {
        }

        public RegistException(string message) : base(message)
        {
        }

        public RegistException(string message, Exception inner)
            : base(message, inner)
        {
        }
    }
}