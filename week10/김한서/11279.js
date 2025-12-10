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
  const n = Number(input[0]);
  let index = 1;
  let arr = [];
  let answer = [];
  for (let i = 0; i < n; i++) {
    const num = Number(input[index++]);
    if (num === 0) {
      arr.length === 0 ? answer.push(0) : answer.push(Math.max(...arr));
    } else {
      arr.push(num);
    }
  }

  console.log(answer.join("\n"));
});
