const fs = require('fs')
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, L] = input[0].split(' ').map(Number);
let points = input[1].split(' ').map(Number);

let ans = 0;
let taped_count = 0;

points.sort((a,b) => a-b);

for(let i =0; i<N; i++){
    if(taped_count > points[i]) continue;

    ans++;
    taped_count = points[i] + L;
}

console.log(ans)