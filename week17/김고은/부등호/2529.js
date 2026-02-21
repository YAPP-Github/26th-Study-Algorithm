const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
let [k, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

// 40m
// 순열 + 백트래킹
arr = arr[0].split(' ')
let ans = [];
let temp = [];
let visited = Array.from({length: 10}).fill(false);

function check_cmp (a, b, cmp) {
    if(cmp === '<') return a < b;
    else if (cmp === '>') return a > b;
}

function recursion () {
    if(temp.length -1 == k){
        ans.push(temp.join(''))
        return;
    }

    for(let i = 9; i >= 0; i--){
        if(visited[i]) continue;

        if(temp.length > 0 && !(check_cmp(temp[temp.length -1], i, arr[temp.length-1]))) continue

        temp.push(i);
        visited[i] = true;

        recursion();

        visited[i] = false;
        temp.pop()
    }
} 
recursion()

console.log(ans[0])
console.log(ans[ans.length -1])

