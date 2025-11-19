// 12852. 1로 만들기 2 (골드5)
// https://www.acmicpc.net/problem/12852

// 1 <= N <= 10^6
// -> 최대 허용 시간복잡도: O(NlogN), 알고리즘: DP + 경로 역추적
// 내가 작성한 코드의 시간복잡도: O(N)

const fs = require("fs");

// const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 백준 제출용
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

// 점화식 세우기
// dp[i] = 정수 i를 1로 만들 수 있는 최소 연산 횟수
const dp = Array(N + 1).fill(0);

// 경로를 추적하기 위한 배열
const prev = Array(N + 1).fill(0);

// 초기값 세팅: i=1로 만들 수 있는 최소 연산 횟수는 0가지 (이미 1이므로)
dp[1] = 0;

for (let i = 2; i <= N; i++) {
  dp[i] = dp[i - 1] + 1;
  prev[i] = i - 1;

  if (i % 3 === 0 && dp[i] > dp[i / 3] + 1) {
    dp[i] = dp[i / 3] + 1;
    prev[i] = i / 3;
  }

  if (i % 2 === 0 && dp[i] > dp[i / 2] + 1) {
    dp[i] = dp[i / 2] + 1;
    prev[i] = i / 2;
  }
}

// 경로를 저장할 배열
const path = [];
let cur = N;

while (cur !== 0) {
  path.push(cur);
  cur = prev[cur];
}

console.log(dp[N]);
console.log(path.join(" "));
