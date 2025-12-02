// 스택 - 15 m
const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let ans = [];

input.forEach((e)=> {
    const letters = e.split('');
    const arr = [];
    let flag = 'yes';
    letters.forEach((letter) => {
        if(letter === '(' || letter === '['){
            arr.push(letter);
        }
        else if (letter === ')'){
            if(arr.pop() !== '(') flag = 'no';
        }
        else if (letter === ']'){
            if(arr.pop() !== '[') flag = 'no';
        }
    })

    arr.length === 0? ans.push(flag): ans.push('no') // 왼쪽 괄호 잔여 여부 체크!
})

ans.pop()

console.log(ans.join('\n'))