const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => input.push(line.trim()));
rl.on("close", () => {
  const n = Number(input[0]);
  const small = [];
  const big = [];

  for (let i = 1; i < n; i++) {
    const [s, b] = input[i].split(" ").map(Number);
    small.push(s);
    big.push(b);
  }

  const k = Number(input[n]);

  if (n === 1) {
    console.log(0);
    return;
  }

  const dp = Array(n).fill(Infinity);
  dp[0] = 0;
  dp[1] = small[0];
  dp[2] = Math.min(small[0] + small[1], big[0]);

  for (let i = 3; i < n; i++) {
    dp[i] = Math.min(dp[i - 1] + small[i - 1], dp[i - 2] + big[i - 2]);
  }

  let answer = dp[n - 1];

  for (let i = 0; i < n - 3; i++) {
    const temp = [...dp];
    temp[i + 3] = Math.min(temp[i + 3], dp[i] + k);

    for (let j = i + 4; j < n; j++) {
      temp[j] = Math.min(temp[j - 1] + small[j - 1], temp[j - 2] + big[j - 2]);
    }

    answer = Math.min(answer, temp[n - 1]);
  }

  console.log(answer);
});
