const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N,M] = input[0].split(' ').map(Number);
let num_arr = Array.from({length: N});

num_arr = input[1].split(' ').map(Number);

let ans = 0;
let left = 0;
let sum = 0;

for(let right = 0; right < N; right++){
    sum += num_arr[right]

    while(sum > M){
        sum -= num_arr[left];

        left++;
    }
    if(sum === M) ans++;
}

console.log(ans)