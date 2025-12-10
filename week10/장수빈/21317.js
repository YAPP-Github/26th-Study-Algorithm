// 21317. 징검다리 건너기 (실버 1)
// https://www.acmicpc.net/problem/21317

const fs = require("fs");

// 백준 제출용
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const jump = [[]];

for (let i = 1; i <= N - 1; i++) {
  const arr = input[i].split(" ").map(Number);
  jump.push(arr);
}

const k = Number(input[N]);

const dp = Array(N + 1).fill(0); // 작은 점프와 큰 점프만 하는 경우
const dpVeryBig = Array(N + 1).fill(Infinity); // 매우 큰 점프도 하는 경우

// 초기값 정의
dp[1] = 0;
if (N >= 2) dp[2] = dp[1] + jump[1][0];

for (let i = 3; i <= N; i++) {
  dp[i] = Math.min(
    dp[i - 1] + jump[i - 1][0], // 작은 점프
    dp[i - 2] + jump[i - 2][1] // 큰 점프
  );

  if (i >= 4) {
    dpVeryBig[i] = Math.min(
      dpVeryBig[i - 1] + jump[i - 1][0],
      dpVeryBig[i - 2] + jump[i - 2][1],
      dp[i - 3] + k // i-3까지는 아직 K 안 썼다가, 여기서 처음 사용
    );
  }
}

console.log(Math.min(dp[N], dpVeryBig[N]));
