let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(" ").map(Number);
const table = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

for (let i = 1; i <= N; i++) {
  const row = input[i].split(" ").map(Number);
  for (let j = 1; j <= N; j++) {
    table[i][j] = row[j - 1];
  }
}

//console.log(table)

const dp = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    dp[i][j] =
      dp[i - 1][j] +
      dp[i][j - 1] -
      dp[i - 1][j - 1] +
      table[i][j];
  }
}

let answer = [];

for (let i = N + 1; i < input.length; i++) {
  const [x1, y1, x2, y2] = input[i].split(" ").map(Number);

  const sum =
    dp[x2][y2] -
    dp[x1 - 1][y2] -
    dp[x2][y1 - 1] +
    dp[x1 - 1][y1 - 1];

  answer.push(sum);
}

console.log(answer.join("\n"));