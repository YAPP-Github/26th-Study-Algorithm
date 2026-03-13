// 실버 3. 햄버거 분배
// https://www.acmicpc.net/problem/19941

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const arr = input[1].split("");

let result = 0;

for (let i = 0; i < N; i++) {
  if (arr[i] === "P") {
    // 왼쪽 구간은 기준점으로부터 먼 햄버거를 먼저 먹어야 하고, 오른쪽 구간은 기준점으로부터 가장 가까운 햄버거를 먼저 먹어야 함
    for (let j = i - K; j <= i + K; j++) {
      if (arr[j] === "H") {
        result++;
        arr[j] = "X";
        break;
      }
    }
  }
}

console.log(result);
