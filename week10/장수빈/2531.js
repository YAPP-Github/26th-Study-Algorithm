// 2531. 회전 초밥 (실버 1)
// https://www.acmicpc.net/problem/2531

// 2 ≤ N ≤ 30,000, 2 ≤ d ≤ 3,000, 2 ≤ k ≤ 3,000 (k ≤ N), 1 ≤ c ≤ d
// -> 최대 허용 시간복잡도: O(N^2), 알고리즘: 구현, 슬라이딩 윈도우, 완전 탐색
// 작성한 코드의 알고리즘: O(N * K)

const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 백준 제출용
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, d, k, c] = input[0].split(" ").map(Number);

let rotateArr = [];

for (let i = 0; i < N + k - 1; i++) {
  const number = Number(input[1 + (i % N)]);
  rotateArr.push(number);
}

let results = [];

for (let left = 0; left < N; left++) {
  let right = left + k - 1;
  const sliceArr = rotateArr.slice(left, right + 1);

  let set = new Set();

  for (let i = 0; i < sliceArr.length; i++) {
    set.add(sliceArr[i]);
  }

  if (set.has(c)) results.push(set.size);
  else results.push(set.size + 1);
}

console.log(Math.max(...results));
