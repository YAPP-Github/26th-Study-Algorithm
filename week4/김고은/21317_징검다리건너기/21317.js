const fs = require("fs");
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const [N, ...rest] = fs.readFileSync(filePath).toString().trim().split('\n');

const k = Number(rest.pop());
let bridge = [];
let dp = Array.from({length: +N }, () => [Infinity, Infinity]); // 0번 요소는 (슈퍼점프 제외 고려) / 1번 요소는 (슈퍼점프넣고 고려)

rest.forEach((e) => {
    const [s, b] = e.split(" ").map(Number);
    bridge.push([s,b])
})

dp[0][0] = 0;

if (N > 1) dp[1][0] = bridge[0][0];
if (N > 2) dp[2][0] = Math.min(
    dp[1][0] + bridge[1][0],
    bridge[0][1]
);

for(let i = 3; i < +N; i++){
    dp[i][0] = Math.min(
        dp[i-1][0] + bridge[i-1][0],
        dp[i-2][0] + bridge[i-2][1]
    )

    dp[i][1] = Math.min(
        dp[i-1][1] + bridge[i-1][0],
        dp[i-2][1] + bridge[i-2][1],
        dp[i-3][0] + k,
    )
}

console.log(Math.min( dp[N-1][0] , dp[N-1][1] ))
