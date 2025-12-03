// 9375. 패션왕 신해빈 (실버3)
// https://www.acmicpc.net/problem/9375

const fs = require("fs");

// const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 백준 제출용
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);
let idx = 1;

for (let tc = 0; tc < T; tc++) {
  const n = Number(input[idx++]);
  const map = new Map();

  for (let i = 0; i < n; i++) {
    const [name, type] = input[idx++].trim().split(" ");

    if (map.has(type)) {
      map.get(type).push(name);
    } else {
      map.set(type, [name]);
    }
  }

  let arrLen = 1;

  for (const arr of map.values()) {
    arrLen *= arr.length + 1;
  }

  console.log(arrLen - 1);
}
