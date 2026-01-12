// dp 13m
const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const N = Number(fs.readFileSync(filePath).toString().trim());

let dp = Array.from({length: N+1}).fill(Infinity);

dp[1] = 0;

for(let i = 2; i <=N; i++){
    if(i % 2 === 0 && i % 3 === 0) dp[i] = Math.min(dp[i-1], dp[i/2], dp[i/3])+1;
    else if(i % 2 === 0 )dp[i] = Math.min(dp[i-1], dp[i/2]) +1 ;
    else if(i % 3 === 0 )dp[i] = Math.min(dp[i-1], dp[i/3]) +1 ;
    else dp[i] = dp[i-1]+1;
}

console.log(dp[N])