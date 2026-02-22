// 실버 2. 사탕 게임
// https://www.acmicpc.net/problem/3085

// 3 <= N < 50
// -> 최대 허용 시간복잡도: 상관 X, 알고리즘: 완전탐색

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const board = [];
for (let i = 1; i <= N; i++) {
  const arr = input[i].split("");
  board.push(arr);
}

let count = 0;

for (let i = 0; i < N; i++) {
  for (let j = 1; j < N; j++) {
    let tempCount = 0; // count와 대소비교할 변수

    // 행 기준으로 swap
    if (board[i][j - 1] !== board[i][j]) {
      const temp = board[i][j - 1];
      board[i][j - 1] = board[i][j];
      board[i][j] = temp;

      // 행 검사
      for (let x = 0; x < N; x++) {
        let cur = 1;
        for (let y = 1; y < N; y++) {
          if (board[x][y] === board[x][y - 1]) cur++;
          else cur = 1;
          tempCount = Math.max(tempCount, cur);
        }
      }

      // 열 검사
      for (let y = 0; y < N; y++) {
        let cur = 1;
        for (let x = 1; x < N; x++) {
          if (board[x][y] === board[x - 1][y]) cur++;
          else cur = 1;
          tempCount = Math.max(tempCount, cur);
        }
      }

      count = Math.max(count, tempCount);

      // 원상복구
      board[i][j] = board[i][j - 1];
      board[i][j - 1] = temp;
    }

    // 열 기준으로 swap
    if (i + 1 < N && board[i][j - 1] !== board[i + 1][j - 1]) {
      tempCount = 0;

      const temp = board[i][j - 1];
      board[i][j - 1] = board[i + 1][j - 1];
      board[i + 1][j - 1] = temp;

      // 행 검사
      for (let x = 0; x < N; x++) {
        let cur = 1;
        for (let y = 1; y < N; y++) {
          if (board[x][y] === board[x][y - 1]) cur++;
          else cur = 1;
          tempCount = Math.max(tempCount, cur);
        }
      }

      // 열 검사
      for (let y = 0; y < N; y++) {
        let cur = 1;
        for (let x = 1; x < N; x++) {
          if (board[x][y] === board[x - 1][y]) cur++;
          else cur = 1;
          tempCount = Math.max(tempCount, cur);
        }
      }

      count = Math.max(count, tempCount);

      board[i + 1][j - 1] = board[i][j - 1];
      board[i][j - 1] = temp;
    }
  }
}

console.log(count);
