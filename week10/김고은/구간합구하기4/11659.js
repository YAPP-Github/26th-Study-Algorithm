// 32m
// stdin 오타 주의 
// sort default 문자열 기준 주의 
const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [ N, M ] = input[0].split(' ').map(Number);
const prefix = Array.from({length: N}).fill(0);
const test_code = input[1].split(' ').map(Number);
let ans = []



for (let i =0; i < N; i++){
    if(i === 0) prefix[i] = test_code[i];
    else prefix[i] = prefix[i-1] + test_code[i] 
}

for(let i =2; i <2+M; i++){
    const [start, end]= input[i].split(' ').sort((a,b) => a-b).map(Number);

    if(start === 1) ans.push(prefix[end-1]);
    else if (start === end) ans.push(test_code[start-1])
    else ans.push(prefix[end-1] - prefix[start-2])
}

console.log(ans.join('\n'))