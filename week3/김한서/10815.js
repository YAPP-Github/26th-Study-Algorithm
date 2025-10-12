const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const nums = new Set(input[1].split(" ").map(Number)); // 상근이가 가진 숫자 카드
const m = Number(input[2]);
const cards = input[3].split(" ").map(Number);

let res = [];

for (const c of cards) {
  res.push(nums.has(c) ? 1 : 0);
}

console.log(res.join(" "));
