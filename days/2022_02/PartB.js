//This section reads in the text file line by line in the folder and returns an array of strings.
const fs = require("fs");

function syncReadFile(filename) {
  const contents = fs.readFileSync(filename, "utf-8");
  const arr = contents.split(/\r?\n/).map(String);
  return arr;
}

const inputText = syncReadFile("Input.txt");

let totalScore = 0;

for (let i = 0; i < inputText.length; i++) {
  switch (inputText[i]) {
    case "A X":
      totalScore = totalScore + 3 + 0;
      break;
    case "A Y":
      totalScore = totalScore + 1 + 3;
      break;
    case "A Z":
      totalScore = totalScore + 2 + 6;
      break;
    case "B X":
      totalScore = totalScore + 1 + 0;
      break;
    case "B Y":
      totalScore = totalScore + 2 + 3;
      break;
    case "B Z":
      totalScore = totalScore + 3 + 6;
      break;
    case "C X":
      totalScore = totalScore + 2 + 0;
      break;
    case "C Y":
      totalScore = totalScore + 3 + 3;
      break;
    case "C Z":
      totalScore = totalScore + 1 + 6;
      break;
    default:
      break;
  }
}

console.log(totalScore);
