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
  const s = Number(input[0]);
  let n = 0;
  let sum = 0;
  let i = 1;
  while (sum + i <= s) {
    sum += i;
    i++;
    n++;
  }
  console.log(n);
});
