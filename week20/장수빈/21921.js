// 실버 3. 블로그
// https://www.acmicpc.net/problem/21921

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, X] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let sum = arr.slice(0, X).reduce((acc, cur) => acc + cur, 0);
let maxNum = sum;
let count = 1;

for (let i = 1; i <= N - X; i++) {
  sum = sum - arr[i - 1] + arr[i + X - 1];
  if (maxNum < sum) {
    maxNum = sum;
    count = 1;
  } else if (maxNum === sum) count++;
}

if (maxNum !== 0) {
  console.log(maxNum);
  console.log(count);
} else {
  console.log("SAD");
}
