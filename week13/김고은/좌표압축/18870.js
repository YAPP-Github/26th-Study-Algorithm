// 18m
const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = input[0];
const arr = input[1].split(' ').map(Number);
let ans = [];

let temp_arr = [...new Set(input[1].split(' ').map(Number))].sort((a,b) => a-b);
let compare_arr = new Map();

temp_arr.forEach((e,i)=> {
    compare_arr.set(e,i)
})

for(let i =0; i <N; i++){
    ans.push(compare_arr.get(arr[i]));
}

console.log(ans.join(' '))
