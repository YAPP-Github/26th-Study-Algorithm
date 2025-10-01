const input = require("fs")
  .readFileSync("/Users/yubin/26th-Study-Algorithm/week1/황유빈/2108.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [n, ...nums] = input;
const sum = nums.reduce((a, b) => a + b, 0);
const avg = sum / nums.length;
const mean = avg < 0 ? -Math.floor(-avg + 0.5) : Math.floor(avg + 0.5);
if (Object.is(mean, -0)) mean = 0;

const asc = nums.slice().sort((a, b) => a - b);
const median = asc[Math.floor(nums.length / 2)];

let mode = new Map();

nums.forEach((element) => {
  mode.set(element, (mode.get(element) ?? 0) + 1);
});

mode = [...mode].sort((a, b) => b[1] - a[1] || a[0] - b[0]);
mode = mode.length > 1 && mode[0][1] == mode[1][1] ? mode[1][0] : mode[0][0];

const range = Math.max(...asc) - Math.min(...asc);

console.log(mean); // 산술평균
console.log(median); // 중앙값
console.log(mode); // 최빈값
console.log(range); //중앙값
