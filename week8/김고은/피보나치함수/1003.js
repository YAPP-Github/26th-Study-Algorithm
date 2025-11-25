const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin': __dirname+ '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const N = input[0];

// 시간초과
// for(let i = 1; i <= N; i ++) {
//     const counter = { zero: 0, one: 0 };
//     fibonacci(input[i], counter)
//     console.log(counter.zero, counter.one)
// }

// function fibonacci (n, counter) {
//     if (n== 0) {
//         counter.zero++;
//         return 0;
//     } else if (n == 1) {
//         counter.one++;
//         return 1;
//     } else {
//         return fibonacci(n-1, counter) + fibonacci(n -2, counter);
//     }
// }

let dp = Array.from({length: 40 +1}, () => []);

dp[0] = [1, 0];
dp[1] = [0, 1];


for(let i = 1; i <= N; i ++) {
    let ans = fibonacciDP (input[i]);
    console.log(ans.join(' '));
}


function fibonacciDP (n) {
    for(let i =2; i <=n; i++){
        dp[i][0] = dp[i-1][0] + dp[i-2][0];
        dp[i][1] = dp[i-1][1] + dp[i-2][1];
    }
    return dp[n]
}