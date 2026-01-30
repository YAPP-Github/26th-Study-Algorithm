// 40m / while 조건에 대해서 신경써서 풀기
const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
let [A, K] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

let ans = 0;

while(K > A){
    if(K % 2 === 0  && K /2 > A) K /= 2;
    else K -= 1;

    ans++;
}

ans += (A - K);

console.log(ans)