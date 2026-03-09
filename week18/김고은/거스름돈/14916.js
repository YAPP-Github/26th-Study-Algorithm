//20m DP
const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
const N = Number(fs.readFileSync(filePath).toString().trim());

let dp = Array.from({length: N+1}).fill(-1)

dp[2] = 1;
dp[4] = 2; 
dp[5] = 1;

for(let i = 6; i <= N; i++){
    if( (dp[i-5] !== -1)){
        dp[i] = dp[i-5] +1;
    } 

    if((dp[i-2] !== -1 )) {
        if(dp[i] == -1)  dp[i] = dp[i-2] +1
        else dp[i] = Math.min(dp[i], dp[i-2]+1)
    }
}

console.log(dp[N])