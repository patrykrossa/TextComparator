using Domain.AdditionalStructures;
using Infrastructure.Models;

namespace Tests
{
    public class ByCharComparatorTests
    {
        private ByCharComparator _comparator;
        public ByCharComparatorTests() {
            _comparator = new ByCharComparator();
        }

        [Theory]
        [MemberData(nameof(GetData))]      
        public async Task CompareFiles_ReturnsCorrectDifferences(byte[] file1, byte[] file2, List<Difference> fixedDifferences)
        {
            // Arrange
            var differences = new List<Difference>();
            await _comparator.ReceiveFiles(file1, file2);
            var areTheSame = true;

            // Act
            await _comparator.CompareFiles();
            differences = await _comparator.GetDifferences();
            for(int i = 0; i < differences.Count; i++)
            {
                if (!differences[i].isEqual(fixedDifferences[i]))
                    areTheSame = false;
            }

            // Assert
            Assert.True(areTheSame); 
        }

        public static IEnumerable<object[]> GetData()
        {
            yield return new object[] { new byte[] { 1, 2, 3, 4, 5 }, new byte[] { 1, 2, 4, 4, 5 }, new List<Difference> { new Difference(2, 2, 1) } };
            yield return new object[] { new byte[] { 1, 2 }, new byte[] { 1, 3 }, new List <Difference> { new Difference(1, 1, 1) } };
            yield return new object[] { new byte[] { 1, 2, 3, 4, 5, 6 }, new byte[] { 1, 2, 3, 5, 6 }, new List <Difference> { new Difference(3, 4, 2), new Difference(5,5,1) } };
            yield return new object[] { new byte[] { 1, 2, 3, 4, 5 }, new byte[] { 1, 2, 3, 4, 5 }, new List<Difference>() };
            yield return new object[] { new byte[] {}, new byte[] {}, new List<Difference>() };
            yield return new object[] { new byte[] {}, new byte[] { 1, 2, 4, 4, 5 }, new List<Difference> { new Difference(0, 4, 5) } };
            yield return new object[] { new byte[] { 1, 2, 3, 4, 5 }, new byte[] { 0, 2, 3, 4, 5 }, new List<Difference> { new Difference(0, 0, 1) } };
            yield return new object[] { new byte[] { 1, 2, 3, 4, 5, 6 }, new byte[] { 2, 1, 3, 5, 4, 6, 7 }, new List<Difference> { new Difference(0, 1, 2), new Difference(3,4,2), new Difference(6,6,1)}};
        } 
    }
}