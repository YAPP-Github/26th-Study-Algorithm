const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const board = [];
for (let i = 1; i <= N; i++) {
  board.push(input[i].split(" ").map(Number));
}

const dp = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    const currentVal = board[i - 1][j - 1];

    dp[i][j] = dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1] + currentVal;
  }
}

const output = [];
for (let i = N + 1; i < N + 1 + M; i++) {
  const [x1, y1, x2, y2] = input[i].split(" ").map(Number);

  const answer =
    dp[x2][y2] - dp[x1 - 1][y2] - dp[x2][y1 - 1] + dp[x1 - 1][y1 - 1];
  output.push(answer);
}

console.log(output.join("\n"));
