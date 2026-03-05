// 실버 3. 수리공 항승
// https://www.acmicpc.net/problem/1449

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, L] = input[0].split(" ").map(Number);
const position = input[1].split(" ").map(Number);

position.sort((a, b) => a - b);

if (L === 1) {
  console.log(N);
  return;
}

let start = position[0] - 0.5;
let end = start + L;

let result = 1;

for (let i = 0; i < N; i++) {
  if (position[i] > end) {
    result++;
    end = position[i] - 0.5 + L;
  }
}

console.log(result);
