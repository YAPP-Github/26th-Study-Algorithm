const input = require("fs")
  .readFileSync("/Users/yubin/26th-Study-Algorithm/week3/황유빈/input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const N = input[0];
const K = input[1];

let arr = [];
let answer = [];
for (let i = 1; i < N + 1; i++) {
  arr.push(i);
}
let index = 0;
while (arr.length > 0) {
  index = (index + K - 1) % arr.length;
  answer.push(arr.splice(index, 1)[0]);
}

console.log(`<${answer.join(', ')}>`);
