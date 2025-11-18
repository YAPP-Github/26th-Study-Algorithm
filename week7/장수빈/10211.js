// 10211. Maximum Subarray (실버4)

// 입력값의 조건 1 <= N <= 1,000
// -> 각 테스트케이스에서 배열 길이 N이 최대 1,000
// -> 모든 연속 부분 배열을 보는 O(N^2) 시간 복잡도까지는 가능하다고 판단 : 완전탐색
// 내가 작성한 코드의 시간복잡도: O(N^2)

const fs = require("fs");

// const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 백준 제출용
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let i = 0;

// T: 테스트 케이스의 수
const T = Number(input[i++]);

for (let t = 0; t < T; t++) {
  const n = Number(input[i++]);
  const arr = input[i++].split(" ").map(Number);
  let max_sum = -Infinity;

  // i: 0 ~ N-1까지 순회 -> O(N)
  for (let i = 0; i < n; i++) {
    let sum = 0;

    // j: i ~ N-1까지 순회 -> O(N)
    for (let j = i; j < n; j++) {
      sum += arr[j];
      max_sum = Math.max(max_sum, sum);
    }
  }
  console.log(max_sum);
}
