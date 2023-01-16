using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.AdditionalStructures
{
    public class Difference
    {
        public int StartIndex { get; set; }
        public int EndIndex { get; set; }
        public int Length { get; set; }

        public Difference(int startIndex, int endIndex, int length)
        {
            StartIndex = startIndex;
            EndIndex = endIndex;
            Length = length;
        }
        public bool isEqual( Difference other )
        {
            if (StartIndex == other.StartIndex && EndIndex == other.EndIndex && Length == other.Length)
                return true;
            else
                return false;
        }
    }
}
