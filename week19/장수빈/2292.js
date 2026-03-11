// 브론즈 2. 벌집
// https://www.acmicpc.net/problem/2292

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

let count = 1;
let room = 1;

while (N > room) {
  if (N === 1) {
    console.log(1);
    return;
  }

  room += count * 6;
  count++;
}

console.log(count);
