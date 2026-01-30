// 실버 1. 행렬
// https://www.acmicpc.net/problem/1080

// 1 <= N <= 50, 1 <= M <= 50
// -> 최대 허용 시간복잡도: O(N^2), 알고리즘: 그리디
// 작성한 코드의 시간복잡도: O(N^2)

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

// A 행렬 생성
const A = [];
for (let i = 1; i <= N; i++) {
  const arr = input[i].split("").map(Number);
  A.push(arr);
}

// B 행렬 생성
const B = [];
for (let i = N + 1; i <= N * 2; i++) {
  const arr = input[i].split("").map(Number);
  B.push(arr);
}

// 3x3 크기의 행렬로 자를 수 없을 경우
if (N < 3 || M < 3) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (A[i][j] !== B[i][j]) {
        console.log(-1);
        return;
      }
    }
  }

  console.log(0);
  return;
}

let count = 0;

for (let i = 0; i <= N - 3; i++) {
  for (let j = 0; j <= M - 3; j++) {
    if (A[i][j] !== B[i][j]) {
      for (let x = i; x <= i + 2; x++) {
        for (let y = j; y <= j + 2; y++) {
          if (A[x][y] === 0) A[x][y] = 1;
          else A[x][y] = 0;
        }
      }
      count++;
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (A[i][j] !== B[i][j]) {
      console.log(-1);
      return;
    }
  }
}

console.log(count);
