// 20m
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [N, ...rest ] = fs.readFileSync(filePath).toString().trim().split('\n');

// dp
let triangle = [];
let dp = Array.from({length: +N+1}, () => Array.from({length: +N}).fill(0));

rest.forEach((line) => {
    triangle.push(line.split(' ').map(Number));
})

triangle[N-1].map((e, idx) => {
    dp[N][idx] = e; 
})


for(let i = N-1; i >= 1; i--){
    triangle[i-1].map((e, idx) => {
        dp[i][idx] = Math.max(dp[i+1][idx] ,dp[i+1][idx+1] ) + e;
    })
}

console.log(Math.max(...dp[1]))