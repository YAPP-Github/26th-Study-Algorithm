// 실버 1. 정수 삼각형
// https://www.acmicpc.net/problem/1932

// 1 <= n <= 500
// -> 최대 허용 시간복잡도: O(N^2), 알고리즘: DP (무엇을 선택했는지에 따라 다음 선택할 수 있는 경우의 수가 달라지기 때문에)
// 작성한 코드의 시간복잡도: O(N^2)

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 백준 제출용
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const triangle = [];

for (let i = 1; i <= n; i++) {
  const arr = input[i].split(" ").map(Number);
  triangle.push(arr);
}

const dp = Array.from({ length: n }, () => Array(n).fill(0)); // dp 생성
dp[0][0] = triangle[0][0]; // 초깃값 세팅

for (let i = 1; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (j === 0) {
      dp[i][j] = dp[i - 1][0] + triangle[i][j];
    } else if (i === j) {
      dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
    } else {
      dp[i][j] = Math.max(
        triangle[i][j] + dp[i - 1][j - 1],
        triangle[i][j] + dp[i - 1][j],
      );
    }
  }
}

console.log(Math.max(...dp[n - 1]));
