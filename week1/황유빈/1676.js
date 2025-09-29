const input = require("fs")
  .readFileSync("/Users/yubin/26th-Study-Algorithm/week1/황유빈/1676.txt")
  .toString()
  .trim();

const num = Number(input);
let count = 0;
for (let i = 5; i <= num; i = i * 5) {
  count = count + Math.floor(num / i);
}

console.log(count);
