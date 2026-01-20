// 실버 2. 좌표 압축
// https://www.acmicpc.net/problem/18870

// 1 <= n <= 1,000,000
// -> 최대 허용 시간복잡도: O(NlogN), 알고리즘: 정렬
// 작성한 코드의 알고리즘: O(NlogN)

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 백준 제출용
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const sort_arr = Array.from(new Set([...arr].sort((a, b) => a - b)));

// O(1)의 시간복잡도로 인덱스를 찾기 위해 Map 사용
let index = new Map();
for (let i = 0; i < sort_arr.length; i++) {
  index.set(sort_arr[i], i);
}

let results = [];

// O(N)
for (let i = 0; i < n; i++) {
  results.push(index.get(arr[i])); // O(1)
}

// O(N^2)으로 런타임 에러 발생
// for (let i = 0; i < n; i++) {  // O(N)
//   results.push(sort_arr.indexOf(arr[i]));  // indexOf(): O(N)
// }

console.log(results.join(" "));
