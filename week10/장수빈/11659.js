// 11659. 구간 합 구하기 4 (실버 3)
// https://www.acmicpc.net/problem/11659

// 1 ≤ N ≤ 100,000, 1 ≤ M ≤ 100,000, 1 ≤ i ≤ j ≤ N
// -> 최대 허용 시간복잡도: O(NlogN), 알고리즘: 1차원 누적합
// 작성한 코드의 알고리즘: O(N + M)

const fs = require("fs");

// 백준 제출용
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// N: 표의 크기, M: 합을 구해야 하는 횟수
const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let prefixSum = Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
  prefixSum[i] = prefixSum[i - 1] + arr[i - 1];
}

for (let i = 2; i <= M + 1; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  let sum = 0;

  sum = prefixSum[end] - prefixSum[start - 1];
  console.log(sum);
}
