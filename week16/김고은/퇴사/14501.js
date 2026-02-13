// dp 
// 30m
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [N, ...rest] = fs.readFileSync(filePath).toString().trim().split('\n');

const meetings = [];
let dp = Array.from({length: +N+1}).fill(0);

rest.forEach((ln) => {
    meetings.push(ln.split(' ').map(Number))
})

for(let i = 0; i < N; i++){
    let [date, price] = meetings[i]
    if(i+date > N) continue;
    dp[i+date] = Math.max(dp[i+date], Math.max(...dp.slice(0,i+1)) + price) ;
}

console.log(Math.max(...dp))