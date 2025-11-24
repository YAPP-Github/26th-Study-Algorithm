const fs = require("fs");
const input = fs
  .readFileSync("/Users/yubin/26th-Study-Algorithm/week8/황유빈/input.txt")
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

const T = input[0];
const inputs = input.slice(1);

const dp = Array.from({ length: 41 }, () => [0, 0]);

dp[0] = [1, 0];
dp[1] = [0, 1];

for (let i = 2; i <= 40; i++) {
  dp[i][0] = dp[i - 1][0] + dp[i - 2][0];
  dp[i][1] = dp[i - 1][1] + dp[i - 2][1];
}

for (let i = 0; i < T; i++) {
  const n = inputs[i];
  console.log(dp[n][0], dp[n][1]);
}
