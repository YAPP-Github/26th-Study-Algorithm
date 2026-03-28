// 실버 4. 등수 구하기
// https://www.acmicpc.net/problem/1205

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, taesu, P] = input[0].split(" ").map(Number);

if (N === 0) {
  console.log(1);
  return;
}

const score = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);
const minScore = score[N - 1];

if (N > 0) {
  if (score.length < P) {
    score.push(taesu);
  } else {
    if (minScore < taesu) {
      score.pop();
      score.push(taesu);
    } else {
      console.log(-1);
      return;
    }
  }
}

score.sort((a, b) => b - a);

for (let i = 0; i < score.length; i++) {
  if (taesu === score[i]) {
    console.log(i + 1);
    return;
  }
}
