const fs = require("fs");
const input = fs
  .readFileSync(
    "/Users/yubin/26th-Study-Algorithm/week1/황유빈/2751.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const N = Number(input[0]);
const arr = new Array(N);
for (let i = 0; i < N; i++) arr[i] = Number(input[i + 1]);

arr.sort((a, b) => a - b);
console.log(arr.join("\n"));
