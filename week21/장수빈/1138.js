// 실버 2. 한 줄로 서기
// https://www.acmicpc.net/problem/1138

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const tallArr = input[1].split(" ").map(Number);

let result = [];

for (let i = N - 1; i >= 0; i--) {
  result.splice(tallArr[i], 0, i + 1);
}

console.log(result.join(" "));
