const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
});

rl.on("close", function () {
  const [n, k] = input[0].split(" ").map(Number);
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i + 1);
  }

  let res = [];
  let index = 0;

  while (arr.length > 0) {
    index = (index + k - 1) % arr.length;
    res.push(arr.splice(index, 1));
  }

  console.log("<" + res.join(", ") + ">");
});
