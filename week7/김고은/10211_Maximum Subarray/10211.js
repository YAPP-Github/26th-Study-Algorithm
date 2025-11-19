let fs = require('fs');
let filePath = process.platform === 'linux' ? '/dev/stdin' : '/input.txt';
let input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split('\n');

const N = input.shift();
let ans = [];

for(let i = 0; i < N; i++){
  let X = Number(input[i * 2]);
  let arr = input[i * 2 + 1].split(" ").map(Number);

  ans.push(DP(X, arr));
}

function DP ( x, arr ) {
  let dp = Array.from({length: x + 1}).fill(0);

  dp[0] = -Infinity;
  dp[1] = arr[0];

  for(let i =2; i <= x; i++) {
    dp[i] = Math.max(dp[i-1] + arr[i-1], arr[i-1]);
  }

  return Math.max(...dp)
}

console.log(ans.join('\n'))