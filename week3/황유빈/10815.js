const input = require("fs")
  .readFileSync("/Users/yubin/26th-Study-Algorithm/week3/황유빈/input.txt")
  .toString()
  .trim()
  .split("\n");

const arr1 = input[1].split(" ").map(Number);
const arr2 = input[3].split(" ").map(Number);

const set1 = new Set(arr1);

const answer = [];

for (let i = 0; i < arr2.length; i++) {
  set1.has(arr2[i]) ? answer.push(1) : answer.push(0);
}

console.log(answer.join(' '));
