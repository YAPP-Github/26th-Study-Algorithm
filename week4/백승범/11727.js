let fs = require("fs");
let filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let n = Number(fs.readFileSync(filePath).toString().trim());

const dp = [0, 1, 3];

for (let i = 3; i <= n; i++) {
  dp.push((dp[i - 1] + 2 * dp[i - 2]) % 10007);
}

console.log(dp[n]);
