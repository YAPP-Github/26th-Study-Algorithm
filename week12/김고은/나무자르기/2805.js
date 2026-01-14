//  40m 
const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N,M] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let start = 0; 
let end = Math.max(...arr);
let ans = 0;

arr.sort((a,b) => b-a);

while(start <= end){
    let mid = Math.floor((start + end) / 2);
    let logs= getLogs(mid);

    if(M > logs){
        end = mid -1;
    } else {
        if(mid > ans) ans = mid;
        start = mid + 1;
    }
}

console.log(ans);

function getLogs (mid) {
    let log_count = 0;

    for(let i =0; i < N; i++) {
        if(arr[i] <= mid) break;
        log_count += arr[i] - mid; 
    }
    return log_count;
}
