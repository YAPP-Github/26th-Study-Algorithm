// 1h 
// 순열 -> 정렬
const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const [N, ...rope] = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

let ans = 0;
rope.sort((a,b) => a-b)

for(let i =0; i <N; i++){
    let min_weight = rope[i];
    let max = min_weight * (N-i);
    if(max > ans) ans = max;
}

console.log(ans)