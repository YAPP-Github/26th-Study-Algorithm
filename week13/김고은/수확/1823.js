const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const N = input.shift();

// 무조건 일단 작은쪽으로 먼저 순회하도록 
// let dp = Array.from({length: N +1}).fill(Infinity)

// dp[0] = 0

// for(let i =1; i <=N; i++){
//     let idx = 0;
//     idx = (input[0] > input[input.length -1]? input.length -1:  0);
//     if(input[0] === input[input.length -1]){
//         idx = (input[1] > input[input.length -2]? input.length -1:  0);
//     }

//     dp[i] = dp[i-1] + (input[idx] * i);

//     input.splice(idx, 1)
// }

// console.log(Math.max(...dp))

let dp = Array.from({length: N }, () => Array.from({length: N}).fill(-Infinity));

// len = 현재 남은 벼 갯수 
for(let len = 1; len <= N; len++){
    for(let l = 0; l < N - len +1; l++){
        let r = l + len -1;
        let order = N - len +1; // 가중치 (순서)

        if(r === l){
            dp[l][r] = input[l] * order; // 마지막 남은 하나
        } else {
            let take_left  = dp[l+1][r] + input[l] * order;
            let take_right = dp[l][r-1] + input[r] * order;

            dp[l][r] = Math.max(take_left, take_right)
        }
    }
}

console.log(dp)
console.log(dp[0][N-1]);