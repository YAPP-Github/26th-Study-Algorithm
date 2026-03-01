const { group } = require('console');
const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const [N, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

let chance = [];
let all = [];
let ans = 0;

for(let i=0; i < N; i++){
    chance.push(arr[i].split(' '))
}

for(let i =1 ; i <=9; i++){
    for(let j =1; j <=9; j++){
        for(let k=1; k <=9; k++){
            if(i == j || j == k || k == i) continue;
            all.push([i,j,k])
        }
    }
}

all.forEach((nums) => {
    let isValid = true;

    for(let i =0; i <+N; i++){
        let strike = 0;
        let ball = 0;
        let guess = chance[i][0].split('').map(Number);
        
        guess.forEach((e, idx) => {
            if(e == nums[idx]) strike++;
            else if (nums.includes(e)) ball++;
        })
        if (strike != chance[i][1] || ball != chance[i][2]) {
            isValid = false;
            break;
        }
    }
    if (isValid) ans++;
})

console.log(ans)