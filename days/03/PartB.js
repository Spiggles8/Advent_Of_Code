//This section reads in the text file line by line in the folder and returns an array of strings.
const fs = require("fs");

function syncReadFile(filename) {
  const contents = fs.readFileSync(filename, "utf-8");
  const arr = contents.split(/\r?\n/).map(String);
  return arr;
}

const inputText = syncReadFile("Input.txt");

let totalSum = 0;

for (let i = 1; i < inputText.length + 1; i++) {
  if (i % 3 === 0) {
    let firstElf = inputText[i - 3];
    let secondElf = inputText[i - 2];
    let thirdElf = inputText[i - 1];

    for (let j = 0; j < firstElf.length; j++) {
      if (
        secondElf.match(firstElf[j]) !== null &&
        thirdElf.match(firstElf[j]) !== null &&
        firstElf[j].toUpperCase() === firstElf[j]
      ) {
        totalSum = totalSum + firstElf[j].charCodeAt(0) - 38;
        break;
      }
      if (
        secondElf.match(firstElf[j]) !== null &&
        thirdElf.match(firstElf[j]) !== null &&
        firstElf[j].toLowerCase() === firstElf[j]
      ) {
        totalSum = totalSum + firstElf[j].charCodeAt(0) - 96;
        break;
      }
    }
  }
}
console.log(totalSum);
