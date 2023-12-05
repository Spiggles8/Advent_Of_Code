using System;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;

// Set the file path to the input file
string filePath = "Input.txt";

// Read the entire content of the file into a string
string input = File.ReadAllText(filePath);

// Define a regular expression pattern to match digits and spelled-out numbers
string pattern = @"\d|one|two|three|four|five|six|seven|eight|nine";

// Calculate the total sum by processing each line of the input
int totalSum = (
    from line in input.Split("\n") // Split the input into lines
    let first = Regex.Match(line, pattern) // Find the first match in the line
    let last = Regex.Match(line, pattern, RegexOptions.RightToLeft) // Find the last match in the line
    select ParseMatch(first.Value) * 10 + ParseMatch(last.Value) // Convert matches to numbers and sum
).Sum();

// Output the total sum to the console
Console.WriteLine($"Total Sum of Calibration Values: {totalSum}");

// Function to convert a matched string to its corresponding integer value
int ParseMatch(string st) => st switch
{
    "one" => 1, // Convert spelled-out numbers to their numeric equivalents
    "two" => 2,
    "three" => 3,
    "four" => 4,
    "five" => 5,
    "six" => 6,
    "seven" => 7,
    "eight" => 8,
    "nine" => 9,
    var d => int.Parse(d) // Convert digit strings to integers
};
