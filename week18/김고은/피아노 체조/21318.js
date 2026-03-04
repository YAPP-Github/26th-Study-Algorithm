// 25m 누적합 
// 구간을 직접 계산하지 않고, 미리 계산 -> 빼두기
// 합이나 갯수를 구하는 경우 + O(N^2)
const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt'
let [
    N,
    levels,
    Q,
    ...questions
] = fs.readFileSync(filePath).toString().trim().split('\n')

levels = levels.split(' ').map(Number);
let fault_arr = [];
let ans = [];

fault_arr[0] = 0;
for(let i =1 ; i < N; i++){
    fault_arr[i] = fault_arr[i-1];

    if(levels[i-1] > levels[i]) fault_arr[i] += 1;
}

for(let i =0; i <Q; i++){
    const [start, end] = questions[i].split(' ').map(Number);
    ans.push(fault_arr[end-1] - fault_arr[start-1])
}


console.log(ans.join('\n'))