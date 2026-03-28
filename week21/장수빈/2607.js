// 실버 2. 비슷한 단어
// https://www.acmicpc.net/problem/2607

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const target = input[1].split("");
let answer = 0;

for (let i = 2; i <= N; i++) {
  let compare = [...target];
  const word = input[i];
  let cnt = 0;

  for (const ch of word) {
    const idx = compare.indexOf(ch);

    if (idx !== -1) {
      compare.splice(idx, 1);
    } else {
      cnt++;
    }
  }

  if (cnt < 2 && compare.length < 2) {
    answer++;
  }
}

console.log(answer);
