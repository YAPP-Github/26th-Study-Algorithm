// 실버 4. 카드
// https://www.acmicpc.net/problem/11652

// 1 <= N <= 100,000
// -> 최대 허용 시간복잡도: O(NlogN), 알고리즘: Map
// 작성한 코드의 시간복잡도: O(N)

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const map = new Map();

for (let i = 1; i <= N; i++) {
  const num = BigInt(input[i]);
  map.set(num, (map.get(num) ?? 0) + 1);
}

let maxCount = 0;
let result = null;

for (const [key, value] of map) {
  if (maxCount < value || (value === maxCount && key < result)) {
    maxCount = value;
    result = key;
  }
}

console.log(result.toString());
