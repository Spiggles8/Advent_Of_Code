using System;
using System.IO;
using System.Linq;

try
{
    // Read all lines from the file and store them in an array of strings.
    string filePath = Path.Combine(Environment.CurrentDirectory, "Input.txt");
    string[] lines = File.ReadAllLines(filePath);

    // Go through each line in the array to pull out digits from the string.
    int totalSum = 0;
    foreach (string line in lines)
    {
        // Extract all numeric sequences from the string
        var numericSequences = line
            .Where(char.IsDigit)
            .Select(c => int.Parse(c.ToString()))
            .ToArray();

        // Calculate the sum of the first and last digits for each sequence
        int lineSum = 0;
        if (numericSequences.Length > 0)
        {
            lineSum = numericSequences[0] * 10 + numericSequences[^1];
        }

        // Print the line and its sum
        Console.WriteLine($"Line: {line}, Sum: {lineSum}");

        // Accumulate the sum for all lines
        totalSum += lineSum;
    }

    // Print the total sum
    Console.WriteLine($"Total Sum: {totalSum}");
}
catch (Exception e)
{
    Console.WriteLine("An error occurred: " + e.Message);
}
