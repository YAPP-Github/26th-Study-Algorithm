// 실버 3. 블로그2
// https://www.acmicpc.net/problem/20365

// 1 <= N <= 500,000
// -> 최대 허용 시간복잡도: O(NlogN), 알고리즘: 그리디
// 작성한 코드의 시간복잡도: O(N)

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const arr = input[1].split("");

let bGroup = 0;
let rGroup = 0;

if (arr[0] === "B") bGroup++;
else rGroup++;

for (let i = 1; i < N; i++) {
  if (arr[i] === "B") {
    if (arr[i - 1] !== arr[i]) {
      bGroup++;
    }
  } else {
    if (arr[i - 1] !== arr[i]) {
      rGroup++;
    }
  }
}

console.log(Math.min(bGroup, rGroup) + 1);
