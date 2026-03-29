// 실버 5. 거스름돈
// https://www.acmicpc.net/problem/14916

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input[0]);
let count = 0;

while (N > 0) {
  if (N % 5 === 0) {
    count += N / 5;
    break;
  } else {
    N -= 2;
    count++;
  }
}

if (N < 0) {
  console.log(-1);
} else {
  console.log(count);
}
