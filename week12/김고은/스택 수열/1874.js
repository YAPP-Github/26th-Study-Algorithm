const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const N = input.shift();

let temp_stack = [];
let idx = 0;
let cmd = '';


for(let i = 1; i <= N; i++){
    // 스택 추가 연산 
    temp_stack.push(i);
    cmd += '+';

    while(temp_stack[temp_stack.length - 1] == input[idx] && idx <= N-1){
        temp_stack.pop();
        cmd += '-';
        idx++;
    }
}

if(temp_stack.length === 0) console.log(cmd.split('').join('\n'));
else console.log('NO');
