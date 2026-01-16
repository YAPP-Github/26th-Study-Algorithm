// 실버 1. 스티커
// https://www.acmicpc.net/problem/9465

// 1 <= n <= 100,000
// -> 최대 허용 시간복잡도: O(NlogN), 알고리즘: DP (현재 무엇을 뜯었는지에 따라 다음 열에서 뜯을 수 있는 선택지가 변경됨)
// 작성한 코드의 알고리즘: O(N)

const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 백준 제출용
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let line = 0;
const T = Number(input[line++]);

for (let tc = 0; tc < T; tc++) {
  const n = Number(input[line++]);

  const top = input[line++].trim().split(" ").map(Number);
  const bottom = input[line++].trim().split(" ").map(Number);

  // dp[0][i]: 열에서 아무것도 안 뜯었을 경우, dp[1][i]: 첫번째 줄을 뜯었을 경우, dp[2][i]: 두번째 줄을 뜯었을 경우
  const dp = Array.from({ length: 3 }, () => Array(n + 1).fill(0));

  // 상태 초기화
  dp[0][1] = 0;
  dp[1][1] = top[0];
  dp[2][1] = bottom[0];

  for (let i = 2; i <= n; i++) {
    dp[0][i] = Math.max(dp[1][i - 1], dp[2][i - 1]);
    dp[1][i] = Math.max(dp[0][i - 1] + top[i - 1], dp[2][i - 1] + top[i - 1]);
    dp[2][i] = Math.max(
      dp[0][i - 1] + bottom[i - 1],
      dp[1][i - 1] + bottom[i - 1]
    );
  }

  console.log(Math.max(dp[0][n], dp[1][n], dp[2][n]));
}
