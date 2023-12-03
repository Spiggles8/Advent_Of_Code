//This section reads in the text file line by line in the folder and returns an array of strings.
const fs = require("fs");

function syncReadFile(filename) {
  const contents = fs.readFileSync(filename, "utf-8");
  const arr = contents.split(/\r?\n/).map(String);
  return arr;
}

function uniqueCharacters(str) {
  for (let i = 0; i < str.length; i++)
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] == str[j]) {
        return false;
      }
    }
  return true;
}

const inputText = syncReadFile("Input.txt");
let marker = 0;
for (let i = 3; i < inputText[0].length; i++) {
  let tempMarker =
    inputText[0][i] +
    inputText[0][i - 1] +
    inputText[0][i - 2] +
    inputText[0][i - 3];

  if (uniqueCharacters(tempMarker) === true) {
    marker = i + 1;
    break;
  }
}

console.log(marker);
