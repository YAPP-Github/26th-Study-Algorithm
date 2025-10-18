const fs = require("fs");
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const N = +fs.readFileSync(filePath).toString().trim();

const dp = Array.from({length: N +1}).fill(0);

dp[1] = 1;
dp[2] = 3;
// dp[3] = 8;
// dp[4] = 14;

for(let i =3; i <= N; i++){
    dp[i] = ( dp[i-1] + dp[i-2] *2 ) % 10007
}

console.log(dp[N])