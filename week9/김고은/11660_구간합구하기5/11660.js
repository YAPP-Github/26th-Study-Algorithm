const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, M] = input.shift().split(' ').map(Number);

let cell = input.splice(0, N).map(line => line.split(' ').map(Number));
let result = [];

let dp = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
        dp[i][j] = cell[i - 1][j - 1] + dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1];
    }
}

for (let i = 0; i < M; i++) {
    let [x1, y1, x2, y2] = input[i].split(' ').map(Number);

    let sum = dp[x2][y2] - dp[x1 - 1][y2] - dp[x2][y1 - 1] + dp[x1 - 1][y1 - 1];

    result.push(sum);
}

console.log(result.join('\n'));
