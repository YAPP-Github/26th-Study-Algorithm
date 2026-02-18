// 실버 2. 1, 2, 3 더하기 3
// https://www.acmicpc.net/problem/15988

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);

const arr = [];
for (let i = 1; i <= T; i++) {
  arr.push(Number(input[i]));
}

const maxNum = Math.max(...arr);

const dp = Array(maxNum + 1).fill(0);
dp[0] = 0;
if (maxNum >= 1) dp[1] = 1;
if (maxNum >= 2) dp[2] = 2;
if (maxNum >= 3) dp[3] = 4;

for (let i = 4; i <= maxNum; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % 1000000009;
}

for (let i = 0; i < arr.length; i++) {
  const index = arr[i];
  console.log(dp[index]);
}
