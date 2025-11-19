const fs = require("fs");
const input = fs
  .readFileSync("/Users/yubin/26th-Study-Algorithm/week7/황유빈/input.txt")
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

const N = input[0];
const arr = [];
for (let i = 0; i < N; i++) {
  arr.push(input[i + 1]);
}
let S = input[N + 1];

for (let i = 0; i < N; i++) {
  if (S <= 0) break;

  let maxVal = -1;
  let maxIdx = -1;

  const searchRange = Math.min(N - 1, i + S);

  for (let j = i; j <= searchRange; j++) {
    if (arr[j] > maxVal) {
      maxVal = arr[j];
      maxIdx = j;
    }
  }

  if (maxIdx === i) continue;

  while (maxIdx > i) {
    let temp = arr[maxIdx];
    arr[maxIdx] = arr[maxIdx - 1];
    arr[maxIdx - 1] = temp;
    maxIdx--;
    S--;
  }
}

console.log(arr.join(" "));
