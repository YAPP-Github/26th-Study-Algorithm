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
  const n = Number(input[0]);
  let answer = 0;
  let num = n;

  // 5가 곱해진 횟수 세기
  while (num >= 5) {
    answer += Math.floor(num / 5);
    // 25, 125 같은 숫자들 고려
    num = Math.floor(num / 5);
  }

  console.log(answer);
});
