let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const small = [];
const big = [];

for (let i = 1; i < N; i++) {
  const [s, b] = input[i].split(" ").map(Number);
  small.push(s);
  big.push(b);
}
const K = +input[N];

if (N === 1) {
  console.log(0);
  process.exit();
}

const INF = Infinity;
const dp = Array.from({ length: N }, () => [INF, INF]);

dp[0][0] = 0;
dp[1][0] = small[0];
for (let i = 2; i < N; i++) {
  dp[i][0] = Math.min(
    dp[i - 1][0] + small[i - 1],
    dp[i - 2][0] + big[i - 2]
  );
}

// 매우 큰 점프 고려
for (let i = 3; i < N; i++) {
  dp[i][1] = Math.min(
    dp[i - 1][1] + small[i - 1],
    dp[i - 2][1] + big[i - 2],
    dp[i - 3][0] + K
  );
}

console.log(Math.min(dp[N - 1][0], dp[N - 1][1]));