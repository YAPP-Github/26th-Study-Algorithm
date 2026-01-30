// 실버 2. 쇠막대기
// https://www.acmicpc.net/problem/10799

// 1 <= n <= 100,000
// -> 최대 허용 시간복잡도: O(NlogN), 알고리즘: 스택
// 작성한 코드의 시간복잡도: O(N)

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 백준 제출용
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const array = input[0].split("");

let bar = 0;
let results = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] === "(") {
    bar++;
  } else {
    // 레이저일 경우
    if (array[i - 1] === "(") {
      bar--;
      results += bar;
    } else {
      bar--;
      results++;
    }
  }
}

console.log(results);
