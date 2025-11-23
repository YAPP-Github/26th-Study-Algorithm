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
  let index = 1;

  const cnt0 = [1, 0];
  const cnt1 = [0, 1];

  // n은 40이라고 주어졌으므로, for문으로 미리 계산
  for (let i = 2; i <= 40; i++) {
    cnt0[i] = cnt0[i - 1] + cnt0[i - 2];
    cnt1[i] = cnt1[i - 1] + cnt1[i - 2];
  }

  for (let i = 0; i < t; i++) {
    const n = Number(input[index++]);
    console.log(cnt0[n], cnt1[n]);
  }
});
