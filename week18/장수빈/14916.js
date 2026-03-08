// 실버 5. 거스름돈
// https://www.acmicpc.net/problem/14916

// 1 <= N <= 100,000
// -> 최대 허용 시간복잡도: O(NlogN), 알고리즘: 그리디
// 작성한 코드의 시간복잡도: O(N)

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input[0]);
let count = 0;

while (N >= 0) {
  // 1. N이 5의 배수이면, 몫이 최솟값
  if (N % 5 === 0) {
    console.log(N / 5 + count);
    break;
  }
  // 1-2. N이 5의 배수가 아니면, N이 5의 배수가 될 때까지 -2
  else {
    N -= 2;
    count++;
  }

  // 2. N이 음수가 될 경우, 거스름돈을 거슬러 줄 수 없음
  if (N < 0) {
    console.log(-1);
  }
}
