// 1h 
const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
let input = Number(fs.readFileSync(filePath).toString().trim())

// 브루투포스 최적의 값 보장 불가 

// const dp = Array.from({length: 224 + 1}).fill(0);
// let idx = 1;
// let ans = 0;

// while(Math.pow(idx, 2) <= input ){
//     idx+=1;
// }


// while(input !== 0){
//     if(input < Math.pow(idx, 2)){ 
//         idx -=1;
//     } else {
//         input -= Math.pow(idx, 2);
//         ans++;
//     }
// }

// console.log(ans)

// DP -> dp 내부 제곱수의 값 저장 
const dp = Array.from({length: input +1}).fill(Infinity);
dp[0] = 0;

for(let i =1; i <= input; i++){
    for(let j=1; j*j <= i; j++){
        dp[i] = Math.min(dp[i-j*j] + 1, dp[i]);
    }
}

console.log(dp[input])