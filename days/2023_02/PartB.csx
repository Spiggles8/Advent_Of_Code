using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

// Dictionary to hold the game data with game ID as the key
var games = new Dictionary<int, List<(string color, int count)>>();

// Read and parse the game data from the file 'Input.txt'
var lines = File.ReadAllLines("Input.txt");
foreach (var line in lines)
{
  // Split each line to separate the game ID and cube counts
  var parts = line.Split(new[] { "Game ", ": ", "; " }, StringSplitOptions.RemoveEmptyEntries);
  var gameId = int.Parse(parts[0]);
  var gameData = new List<(string, int)>();

  // Parse the cube counts and colors from each part
  for (int i = 1; i < parts.Length; i++)
  {
    var subParts = parts[i].Split(new[] { ", " }, StringSplitOptions.RemoveEmptyEntries);
    foreach (var subPart in subParts)
    {
      var cubeData = subPart.Split(' ');
      gameData.Add((cubeData[1], int.Parse(cubeData[0])));
    }
  }

  // Add parsed data to the games dictionary
  games[gameId] = gameData;
}

// Variable to hold the sum of powers of all games
long sumOfPowers = 0;

// Iterating over each game to calculate the minimum set of cubes and their power
foreach (var game in games)
{
  // Dictionary to hold the maximum count of cubes for each color in the current game
  var maxCubes = new Dictionary<string, int> {
        {"red", 0},
        {"green", 0},
        {"blue", 0}
    };

  // Determine the maximum count for each color
  foreach (var (color, count) in game.Value)
  {
    if (count > maxCubes[color])
    {
      maxCubes[color] = count;
    }
  }

  // Calculate the power of the cube set (product of counts of all colors)
  long power = maxCubes["red"] * maxCubes["green"] * maxCubes["blue"];
  sumOfPowers += power;

  // Output the game ID, cube counts, and power
  Console.WriteLine($"Game {game.Key}: Red {maxCubes["red"]}, Green {maxCubes["green"]}, Blue {maxCubes["blue"]}, Power {power}");
}

// Output the sum of powers of all games
Console.WriteLine($"Sum of powers of all games: {sumOfPowers}");
