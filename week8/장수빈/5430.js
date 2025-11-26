// 5430. AC (골드 5)
// https://www.acmicpc.net/problem/5430

// T <= 100, 1 <= p.length <= 100,000, 1 <= n <= 100,000
// p의 길이 n의 개수 <= 700,000
// -> 최대 허용 시간복잡도: O(NlogN), 알고리즘: 구현
// 내가 작성한 코드의 시간복잡도: O(N)

const fs = require("fs");

// const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 백준 제출용
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// T: 테스트케이스 수
const T = Number(input[0]);

let line = 1;

for (let tc = 1; tc <= T; tc++) {
  const p = input[line++]; // 수행할 함수 문자열
  const n = Number(input[line++]); // 배열 길이
  let arr = JSON.parse(input[line++]);

  let head = 0;
  let tail = arr.length - 1;
  let isReversed = false;
  let isError = false;

  for (let i = 0; i < p.length; i++) {
    if (p[i] === "R") {
      isReversed = !isReversed;
    } else if (p[i] === "D") {
      // 배열이 비어있는데 D 연산을 수행한 경우
      if (head > tail) {
        isError = true;
        break;
      }

      if (!isReversed) head++;
      else tail--;
    }
  }

  if (isError) {
    console.log("error");
    continue;
  }

  if (head > tail) {
    console.log("[]");
  } else {
    let slice = arr.slice(head, tail + 1);

    if (isReversed) slice.reverse();

    console.log("[" + slice.join(",") + "]");
  }
}

// 시간 초과
// for (let i = 0; i < p.length; i++) {
//   if (p[i] === "R") {
//     arr = arr.reverse();
//   } else if (p[i] === "D") {
//     if (arr.length > 0) {
//       arr.shift();
//     }
//   }
// }

// if (arr.length > 0) {
//   console.log("[" + arr.join(",") + "]");
// } else {
//   console.log("error");
// }
