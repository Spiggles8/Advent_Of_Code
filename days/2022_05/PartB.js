//This section reads in the text file line by line in the folder and returns an array of strings.
const fs = require("fs");

function syncReadFile(filename) {
  const contents = fs.readFileSync(filename, "utf-8");
  const arr = contents.split(/\r?\n/).map(String);
  return arr;
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

const inputText = syncReadFile("Input.txt");

let columnIndices = [];
let maxRow = 0;

for (let i = 0; i < inputText.length; i++) {
  if (inputText[i].includes("[")) {
    for (let j = 0; j < inputText[i].length; j++) {
      if (inputText[i][j].indexOf("[") !== -1) {
        columnIndices.push(j + 1);
      }
    }
  } else {
    maxRow = i;
    break;
  }
}

columnIndices = columnIndices.filter(onlyUnique).sort(function (a, b) {
  return a - b;
});

let dataArray = [];

for (let i = 0; i < columnIndices.length; i++) {
  for (let j = 0; j < maxRow; j++) {
    if (inputText[j][columnIndices[i]].trim().length === 1) {
      dataArray[i] = dataArray[i] + inputText[j][columnIndices[i]].toString();
    }
  }
  dataArray[i] = dataArray[i].slice(9);
}

let moves = [];

for (let i = 0; i < inputText.length; i++) {
  if (inputText[i].includes("move")) {
    moves.push(inputText[i].replace(/[a-z]/gi, ""));
  }
}

for (let i = 0; i < moves.length; i++) {
  let firstNum = moves[i].trim().split(/\s+/)[0] - 1;
  let secondNum = moves[i].trim().split(/\s+/)[1] - 1;
  let thirdNum = moves[i].trim().split(/\s+/)[2] - 1;

  if (firstNum > 0) {
    dataArray[thirdNum] =
      dataArray[secondNum].slice(0, firstNum + 1) + dataArray[thirdNum];
    dataArray[secondNum] = dataArray[secondNum].slice(firstNum + 1);
  } else {
    dataArray[thirdNum] = dataArray[secondNum][0] + dataArray[thirdNum];
    dataArray[secondNum] = dataArray[secondNum].slice(1);
  }
}

let topStacks = "";

for (let i = 0; i < dataArray.length; i++) {
  topStacks = topStacks + dataArray[i][0];
}

console.log(topStacks);
