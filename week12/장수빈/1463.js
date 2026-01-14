// 실버3. 1로 만들기
// https://www.acmicpc.net/problem/1463

// 1 <= n <= 10^6
// -> 최대 허용 시간복잡도: O(NlogN), 알고리즘: DP (연산의 최소 횟수, i를 작은 문제로 쪼갤 수 있기 때문에, N이 최대 10^6이므로 재귀/완탐은 X)
// 작성한 코드의 알고리즘: O(N)

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);

const dp = Array(n + 1).fill(0);
dp[1] = 0;
dp[2] = 1;
dp[3] = 1;

for (let i = 4; i <= n; i++) {
  dp[i] = dp[i - 1] + 1;

  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[Math.floor(i / 3)] + 1);
  }

  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[Math.floor(i / 2)] + 1);
  }
}

console.log(dp[n]);
