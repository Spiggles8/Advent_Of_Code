// Input.csx
using System;
using System.IO;

void ReadFile(string fileName)
{
    string filePath = Path.Combine(Environment.CurrentDirectory, fileName);

    try
    {
        string[] lines = File.ReadAllLines(filePath);

        foreach (string line in lines)
        {
            Console.WriteLine(line);
        }
    }
    catch (Exception e)
    {
        Console.WriteLine("An error occurred: " + e.Message);
    }
}

// Call the function with the desired file name
ReadFile("Input.txt");
