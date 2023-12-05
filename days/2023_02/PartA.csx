using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

// Dictionary to hold game data with game ID as key
var games = new Dictionary<int, List<(string color, int count)>>();

// Read and parse the game data from the file
var lines = File.ReadAllLines("Input.txt");
foreach (var line in lines)
{
  // Split each line to separate the game ID and the cube counts
  var parts = line.Split(new[] { "Game ", ": ", "; " }, StringSplitOptions.RemoveEmptyEntries);
  var gameId = int.Parse(parts[0]);
  var gameData = new List<(string, int)>();

  // Parse the cube counts and colors
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

// Dictionary to hold the available number of cubes for each color
var cubes = new Dictionary<string, int> {
    {"red", 12},
    {"green", 13},
    {"blue", 14}
};

// Filter out the games that are possible given the cube constraints
var possibleGames = games.Where(game => IsGamePossible(game.Value, cubes)).ToList();
int sumOfPossibleGameIds = possibleGames.Sum(game => game.Key);

// Output the possible games and the sum of their IDs
Console.WriteLine("Possible Games:");
foreach (var game in possibleGames)
{
  Console.WriteLine($"Game ID: {game.Key}");
}
Console.WriteLine($"Sum of possible game IDs: {sumOfPossibleGameIds}");

// Function to check if a game is possible with the given cubes
bool IsGamePossible(List<(string color, int count)> gameData, Dictionary<string, int> availableCubes)
{
  // Iterate through each cube count and check against the available cubes
  foreach (var (color, count) in gameData)
  {
    if (count > availableCubes[color])
    {
      return false;
    }
  }

  return true;
}
