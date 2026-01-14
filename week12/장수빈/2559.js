// 실버 3. 수열
// https://www.acmicpc.net/problem/2559

// 2 <= n <= 10^5, 1 <= k <= n
// -> 최대 허용 시간복잡도: O(NlogN), 알고리즘: 슬라이딩 윈도우..?
// 작성한 코드의 알고리즘: O(N)

const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 백준 제출용
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let sum = 0;

for (let i = 0; i < k; i++) {
  sum += arr[i];
}

let maxSum = sum;

for (let i = 1; i <= n - k; i++) {
  sum = sum - arr[i - 1] + arr[i + (k - 1)];
  maxSum = Math.max(maxSum, sum);
}

console.log(maxSum);

// O(N^2)으로 메모리 초과 발생
// const results = [];

// for (let i = 0; i <= n - k; i++) {
//   let left = i;
//   let right = k - 1 + left;

//   const sum = arr.slice(left, right + 1).reduce((acc, cur) => acc + cur, 0);
//   results.push(sum);
// }

// console.log(Math.max(...results));
