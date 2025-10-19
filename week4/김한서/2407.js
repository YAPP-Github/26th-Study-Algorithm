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
  const [n, m] = input[0].split(" ").map(Number);

  let res = 1n;
  for (let i = 1n; i <= BigInt(m); i++) {
    res = (res * (BigInt(n) - i + 1n)) / i;
  }

  console.log(String(res));
});

// BigInt는 아주 큰 정수를 정확하게 표현할 수 있는 JavaScript 내장 자료형
