const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

let number = input[0];
let dp = [1,1,1,2,2];

for(let i = 5; i <=100; i++){
    dp[i] = dp[i-1] + dp[i-5];
}

for(let i = 1; i <= number; i++){
    let target = input[i];
    console.log(dp[target-1])
}
