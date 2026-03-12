// 실버 3. 영단어 암기는 괴로워
// https://www.acmicpc.net/problem/20920

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const wordMap = new Map();

for (let i = 1; i <= N; i++) {
  const word = input[i];

  // 0. 단어의 길이가 M 이상인 단어만 암기
  if (word.length >= M) {
    wordMap.set(word, (wordMap.get(word) ?? 0) + 1);
  }
}

const wordArr = [...wordMap];

wordArr.sort((a, b) => {
  // 1. 자주 나온 단어
  if (b[1] !== a[1]) return b[1] - a[1];

  // 2. 단어 길이
  if (b[0].length !== a[0].length) return b[0].length - a[0].length;

  // 3. 사전순
  if (a[0] < b[0]) return -1;
  if (a[0] > b[0]) return 1;
  return 0;
});

let result = [];

for (let i = 0; i < wordArr.length; i++) {
  result.push(wordArr[i][0]);
}

console.log(result.join("\n"));
