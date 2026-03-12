// 실버 4. 어두운 굴다리
// https://www.acmicpc.net/problem/17266

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const M = Number(input[1]);
const arr = input[2].split(" ").map(Number);

// 1. 가로등이 맨 끝점(0, N)을 비출 수 있어야 함
let result = Math.max(arr[0], N - arr[M - 1]);

for (let i = 1; i < M; i++) {
  // 2. 가로등 사이의 간격만큼 비춰야 함
  const gap = arr[i] - arr[i - 1];
  result = Math.max(result, Math.ceil(gap / 2));
}

console.log(result);
