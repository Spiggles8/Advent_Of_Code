//This section reads in the text file line by line in the folder and returns an array of strings.
const fs = require("fs");

function syncReadFile(filename) {
  const contents = fs.readFileSync(filename, "utf-8");
  const arr = contents.split(/\r?\n/).map(String);
  return arr;
}

const inputText = syncReadFile("Input.txt");

let pairTotal = 0;

for (let i = 0; i < inputText.length; i++) {
  let firstElfZone1 = Number(inputText[i].split(",")[0].split("-")[0]);
  let firstElfZone2 = Number(inputText[i].split(",")[0].split("-")[1]);

  let secondElfZone1 = Number(inputText[i].split(",")[1].split("-")[0]);
  let secondElfZone2 = Number(inputText[i].split(",")[1].split("-")[1]);

  if (firstElfZone2 >= secondElfZone1 && secondElfZone2 >= firstElfZone1) {
    pairTotal = pairTotal + 1;
    continue;
  }
}

console.log(pairTotal);
