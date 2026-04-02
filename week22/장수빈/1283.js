// 실버 1. 단축키 지정
// https://www.acmicpc.net/problem/1283

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const used = new Set();
const result = [];

for (let i = 1; i <= N; i++) {
  const line = input[i];
  const words = line.split(" ");
  let done = false;

  // 1. 각 단어의 첫 글자 확인
  for (let j = 0; j < words.length; j++) {
    const ch = words[j][0].toUpperCase();

    if (!used.has(ch)) {
      used.add(ch);

      let idx = 0;
      for (let k = 0; k < j; k++) {
        idx += words[k].length + 1; // 앞 단어 길이 + 공백
      }

      result.push(
        line.slice(0, idx) + "[" + line[idx] + "]" + line.slice(idx + 1),
      );
      done = true;
      break;
    }
  }

  if (done) continue;

  // 2. 문자열 전체 왼쪽부터 확인
  for (let j = 0; j < line.length; j++) {
    if (line[j] === " ") continue;

    const ch = line[j].toUpperCase();

    if (!used.has(ch)) {
      used.add(ch);
      result.push(line.slice(0, j) + "[" + line[j] + "]" + line.slice(j + 1));
      done = true;
      break;
    }
  }

  // 3. 아무것도 지정 못하면 그대로 출력
  if (!done) {
    result.push(line);
  }
}

console.log(result.join("\n"));
