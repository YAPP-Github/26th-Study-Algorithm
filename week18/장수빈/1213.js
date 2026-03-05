// 실버 3. 팰린드롬 만들기
// https://www.acmicpc.net/problem/1213

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const word = input[0];
const map = new Map();

// Map의 각 알파벳의 개수 저장
for (let i = 0; i < word.length; i++) {
  map.set(word[i], (map.get(word[i]) ?? 0) + 1);
}

// 불가능의 경우
// 1. word의 길이가 짝수라면, 모든 알파벳의 수 또한 짝수여야 가능 => 하나라도 홀수이면 팰린드롬 불가능
if (word.length % 2 === 0) {
  for (const [key, value] of map) {
    if (value % 2 !== 0) {
      console.log("I'm Sorry Hansoo");
      return;
    }
  }
}
// 2. word의 길이가 홀수라면, 한가지 알파벳의 수만 홀수 => 2개 이상이 홀수면 팰린드롬 불가능
else {
  let oddCnt = 0;
  for (const [key, value] of map) {
    if (value % 2 !== 0) {
      oddCnt++;
    }

    if (oddCnt > 1) {
      console.log("I'm Sorry Hansoo");
      return;
    }
  }
}

// 가능의 경우
const sortKey = Array.from(map.keys()).sort();

let left = "";
let mid = "";
let right = "";

for (const ch of sortKey) {
  const count = map.get(ch);

  // count가 홀수인 경우에 mid
  if (count % 2 !== 0) mid = ch;

  left += ch.repeat(Math.floor(count / 2));
}

right = Array.from(left).reverse().join("");

console.log(left + mid + right);
