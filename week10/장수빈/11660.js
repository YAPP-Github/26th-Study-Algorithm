// 11660. 구간 합 구하기 5 (실버 1)
// https://www.acmicpc.net/problem/11660

// 1 <= N <= 1024, 1 <= M <= 100,000
// -> 최대 허용 시간복잡도: O(N^2), 알고리즘: 2차원 누적합
// 작성한 코드의 알고리즘: O(N^2)

const fs = require("fs");

// 백준 제출용
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// N: 표의 크기, M: 합을 구해야 하는 횟수
const [N, M] = input[0].split(" ").map(Number);

// 2차원 누적합 배열
const prefixSum = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

for (let i = 1; i <= N; i++) {
  const row = input[i].split(" ").map(Number);

  for (let j = 1; j <= N; j++) {
    prefixSum[i][j] =
      row[j - 1] +
      prefixSum[i - 1][j] +
      prefixSum[i][j - 1] -
      prefixSum[i - 1][j - 1];
  }
}

// (x1, y1) ~ (x2, y2)의 누적합
for (let k = N + 1; k <= N + M; k++) {
  const [x1, y1, x2, y2] = input[k].split(" ").map(Number);
  let sum = 0;

  sum =
    prefixSum[x2][y2] -
    prefixSum[x1 - 1][y2] -
    prefixSum[x2][y1 - 1] +
    prefixSum[x1 - 1][y1 - 1];

  console.log(sum);
}

// 시간 초과 - 완전 탐색 (시간복잡도 - O(N^3))
// const map = [];

// for (let i = 1; i <= N; i++) {
//   const arr = input[i].split(" ").map(Number);
//   map.push(arr);
// }

// for (let k = N + 1; k <= N + M; k++) {
//   const [x1, y1, x2, y2] = input[k].split(" ").map(Number);
//   let sum = 0;

//   for (let i = x1 - 1; i <= x2 - 1; i++) {
//     for (let j = y1 - 1; j <= y2 - 1; j++) {
//       sum += map[i][j];
//     }
//   }

//   console.log(sum);
// }
