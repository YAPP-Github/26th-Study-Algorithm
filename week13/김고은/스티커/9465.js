// 18m
const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const [T, ...rest] =fs.readFileSync(filePath).toString().trim().split('\n');

for(let i =0; i < T; i++){
    let n = Number(rest[i*3]);
    let l_1 = rest[i*3 +1].split(' ').map(Number);
    let l_2 = rest[i*3 +2].split(' ').map(Number);

    let max = getScore(n, l_1, l_2)
    console.log(max)
}


function getScore (n, l1, l2) {
    let dp = Array.from({length: n+1}, () => Array.from({length: 3}))

    dp[1][0] = l1[0];
    dp[1][1] = l2[0];
    dp[1][2] = 0;

    for(let i =2; i <=n; i++){
        dp[i][0] = Math.max(dp[i-1][1], dp[i-1][2]) + l1[i-1];
        dp[i][1] = Math.max(dp[i-1][0], dp[i-1][2]) + l2[i-1];
        dp[i][2] = Math.max(dp[i-1][1], dp[i-1][0])
    }

    return Math.max(...dp[n])
}