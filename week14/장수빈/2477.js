// 실버 2. 참외밭
// https://www.acmicpc.net/problem/2477

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const k = Number(input[0]);

const lengthArr = [];
for (let i = 1; i <= 6; i++) {
  const [_, length] = input[i].split(" ").map(Number);
  lengthArr.push(length);
}

let maxColumnLength = 0;
let maxRowLength = 0;

let smallColumnLength = 0;
let smallRowLength = 0;

for (let i = 0; i < 6; i++) {
  const [direction, length] = input[i + 1].split(" ").map(Number);

  if (direction === 3 || direction === 4) {
    if (length > maxColumnLength) {
      maxColumnLength = length;
      smallColumnLength = lengthArr[(i + 3) % 6];
    }
  } else if (direction === 1 || direction === 2) {
    if (length > maxRowLength) {
      maxRowLength = length;
      smallRowLength = lengthArr[(i + 3) % 6];
    }
  }
}

console.log(
  k * (maxColumnLength * maxRowLength - smallColumnLength * smallRowLength),
);
