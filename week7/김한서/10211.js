const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.trim());
});

rl.on("close", function () {
  const T = Number(input[0]);
  let idx = 1;
  let answer = [];
  for (let i = 0; i < T; i++) {
    const n = Number(input[idx++]);
    const x = input[idx++].split(" ").map(Number);
    let current = x[0];
    let maxSum = x[0];
    for (let j = 1; j < n; j++) {
      current = Math.max(x[j], current + x[j]);
      maxSum = Math.max(maxSum, current);
    }
    answer.push(maxSum);
  }
  console.log(answer.join("\n"));
});
