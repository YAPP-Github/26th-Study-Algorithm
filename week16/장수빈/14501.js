// 실버 3. 퇴사
// 문제: https://www.acmicpc.net/problem/14501

// 1 <= N <= 15
// 알고리즘: DP (뒤에서부터 최댓값 갱신)
// 시간복잡도: O(N)

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

const T = Array(N + 1).fill(0);
const P = Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
  const [t, p] = input[i].split(" ").map(Number);
  T[i] = t;
  P[i] = p;
}

// dp[i] = i일부터 퇴사일까지 얻을 수 있는 최대 이익
const dp = Array(N + 2).fill(0);

// 뒤에서부터 채우기
for (let i = N; i >= 1; i--) {
  const next = i + T[i];

  // 1) i일 상담을 하지 않는 경우
  dp[i] = dp[i + 1];

  // 2) i일 상담을 하는 경우 (퇴사 전까지 끝나야 함)
  if (next <= N + 1) {
    dp[i] = Math.max(dp[i], P[i] + dp[next]);
  }
}

console.log(dp[1]);
