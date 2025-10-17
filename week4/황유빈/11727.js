const input = require("fs")
  .readFileSync("/Users/yubin/26th-Study-Algorithm/week4/황유빈/input.txt")
  .toString()
  .trim();

const n = Number(input);

const dp = Array(n + 2).fill(0);
dp[1] = 1;
dp[2] = 3;

for (let i = 3; i <= n; i++) {
  dp[i] = dp[i - 1] + 2 * dp[i - 2] % 10007;
}

console.log(dp[n]%10007);
// n=1 일 때 1가지
// 1. (2x1) 1개
// n=2 일 때 3가지
// 1. (2x1) 2개
// 2. (2x1) 1개 + (1x2) 2개
// 3. (2x1) 1개 + (2x2) 1개
// n=3 일 때
// 1. (2x1) 2개 + (1x2) 1개
// 2. (1x2) 1개 + (2x1) 2개 , 1,2는 좌우 대칭
// 3. (1x2) 1개 + (2x2) 1개
// 4. (2x2) 1개 + (1x2) 1개 , 3,는  좌우 대칭
// 5. (2x1) 3개
