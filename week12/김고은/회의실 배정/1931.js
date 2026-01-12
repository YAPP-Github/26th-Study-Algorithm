const fs = require('fs');
const filePath = process.platform === 'linux'?  '/dev/stdin' : __dirname + '/input.txt';
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

// dp 메모리 초과
// let time_table = [];
// let max = 0;

// input.forEach((ln ) => {
//     time_table.push(ln.split(' ').map(Number))
// })

// time_table.sort ((a,b) => a[0] - b[0]);

// time_table.forEach((e) => {
//     if(e[1] > max) max = e[1]
// })

// let dp = Array.from({length: max +1}).fill(0);

// for(let i = 0; i < N; i ++){
//     let prev_max_meet = Math.max(...dp.slice(0, time_table[i][0]))
//     dp[time_table[i][1]] = prev_max_meet +1;
// }

// console.log(Math.max(...dp))

let time_table = [];
let ans = 0;
let current = [0,0];

input.forEach((ln ) => {
    time_table.push(ln.split(' ').map(Number))
})

time_table.sort ((a, b) => {
    if(a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1]; 
});

for(let i = 0; i < N; i++){
    if(current[1] <= time_table[i][0]){
        ans++;
        current = time_table[i];
    }
}

console.log(ans)