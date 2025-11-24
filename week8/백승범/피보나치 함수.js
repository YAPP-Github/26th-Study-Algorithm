let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = input[0];
const cases = input.slice(1);

const dp = Array.from({ length: 41 }, () => [0, 0]);

dp[0] = [1, 0];    
dp[1] = [0, 1];   

for (let i = 2; i <= 40; i++) {
  dp[i][0] = dp[i - 1][0] + dp[i - 2][0];
  dp[i][1] = dp[i - 1][1] + dp[i - 2][1];
}

let result = '';
for (const n of cases) {
  result += dp[n][0] + ' ' + dp[n][1] + '\n';
}

console.log(result.trim());