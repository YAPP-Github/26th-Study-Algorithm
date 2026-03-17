// 실버 5. 덩치
// https://www.acmicpc.net/problem/7568

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

let result = [];

for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  let count = 0;

  for (let j = 1; j <= N; j++) {
    if (i === j) continue;
    const [p, q] = input[j].split(" ").map(Number);

    if (x < p && y < q) count++;
  }

  result.push(count + 1);
}

console.log(result.join(" "));
