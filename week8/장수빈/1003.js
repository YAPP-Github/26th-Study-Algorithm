// 1003. 피보나치 함수 (실버3)
// https://www.acmicpc.net/problem/1003

// 0 <= N <= 40
// -> 최대 허용 시간복잡도: O(T * N), 알고리즘: DP
// 내가 작성한 코드의 시간복잡도: O(T * N)

const fs = require("fs");

// const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 백준 제출용
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// T: 테스트케이스의 수
const T = Number(input[0]);

// dp 생성 (N이 최대 40이므로 미리 생성해둠)
const dp = Array.from({ length: 41 }, () => []);

// dp 초기값
dp[0][0] = 1;
dp[0][1] = 0;

dp[1][0] = 0;
dp[1][1] = 1;

for (let i = 1; i <= T; i++) {
  const number = Number(input[i]);

  for (let j = 2; j <= number; j++) {
    // dp 점화식 세우기
    // dp[j][0] = 정수 j일 때, 0이 출력되는 횟수
    // dp[j][1] = 정수 j일 때, 1이 출력되는 횟수
    dp[j][0] = dp[j - 1][0] + dp[j - 2][0];
    dp[j][1] = dp[j - 1][1] + dp[j - 2][1];
  }

  console.log(dp[number].join(" "));
}
