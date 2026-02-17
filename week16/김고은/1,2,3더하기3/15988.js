// 25m
const fs = require('fs')
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = input.shift();
const arr = input.map(Number);
let max = Math.max(...arr)

let dp = Array.from({length: max +1}).fill(0);

dp[1]=1;
dp[2]=2;
dp[3]= dp[2] + dp[1] + 1;

for(let i =4; i <= max; i++){
    dp[i] = (dp[i-1] + dp[i-2] + dp[i-3]) % 1000000009
}

arr.forEach((e) => {
    console.log(dp[e])
})
