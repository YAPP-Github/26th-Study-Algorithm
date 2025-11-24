const fs = require("fs");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "/Users/yubin/26th-Study-Algorithm/week8/황유빈/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);

const fruits = input.slice(1).join(" ").trim().split(/\s+/).map(Number);

let maxLen = 0;
let left = 0;

const fruitMap = new Map();

for (let right = 0; right < N; right++) {
  const rightFruit = fruits[right];
  fruitMap.set(rightFruit, (fruitMap.get(rightFruit) || 0) + 1);

  while (fruitMap.size > 2) {
    const leftFruit = fruits[left];
    const count = fruitMap.get(leftFruit);

    if (count === 1) {
      fruitMap.delete(leftFruit);
    } else {
      fruitMap.set(leftFruit, count - 1);
    }
    left++;
  }

  maxLen = Math.max(maxLen, right - left + 1);
}

console.log(maxLen);
