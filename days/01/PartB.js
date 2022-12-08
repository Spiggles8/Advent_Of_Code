//This section reads in the text file line by line in the folder and returns an array of strings.
const fs = require("fs");

function syncReadFile(filename) {
  const contents = fs.readFileSync(filename, "utf-8");
  const arr = contents.split(/\r?\n/).map(Number);
  return arr;
}

const inputText = syncReadFile("Input.txt");

let currentTotal = 0;
let currentMax1Calories = 0;
let currentMax2Calories = 0;
let currentMax3Calories = 0;

for (let i = 0; i < inputText.length; i++) {
  currentTotal += inputText[i];

  if (inputText[i] === 0) {
    if (currentTotal > currentMax1Calories) {
      currentMax3Calories = currentMax2Calories;
      currentMax2Calories = currentMax1Calories;
      currentMax1Calories = currentTotal;
    }
    if (
      currentTotal > currentMax2Calories &&
      currentTotal !== currentMax1Calories
    ) {
      currentMax3Calories = currentMax2Calories;
      currentMax2Calories = currentTotal;
    }
    if (
      currentTotal > currentMax3Calories &&
      currentTotal !== currentMax1Calories &&
      currentTotal !== currentMax2Calories
    ) {
      currentMax3Calories = currentTotal;
    }
    currentTotal = 0;
  }
}

console.log(currentMax1Calories, currentMax2Calories, currentMax3Calories);
console.log(currentMax1Calories + currentMax2Calories + currentMax3Calories);
