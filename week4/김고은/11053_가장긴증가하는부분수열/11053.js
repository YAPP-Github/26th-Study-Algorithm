const fs = require("fs");
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const [A, input] = fs.readFileSync(filePath).toString().trim().split("\n");

let num_arr = input.split(" ").map(Number);

let dp = Array.from({length: +A+1}).fill(0);

dp[1] = 1;

for(let i = 2; i <= A; i++ ){
    let temp_arr = [1];
    for(let j = 0; j < i; j++){
        if(num_arr[i-1] > num_arr[j-1]) temp_arr.push(dp[j] + 1);
    }

    dp[i] = Math.max(...temp_arr)
}

console.log(Math.max(...dp))