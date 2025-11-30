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
  const t = Number(input[0]);
  const arr = Array.from({ length: 100 }, () => 0);
  arr[1] = 1;
  arr[2] = 1;
  arr[3] = 1;
  for (let i = 4; i < 101; i++) {
    arr[i] = arr[i - 2] + arr[i - 3];
  }

  for (let i = 0; i < t; i++) {
    const n = Number(input[i + 1]);
    console.log(arr[n]);
  }
});
