// 35m
const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('');

let laser_flag = false;
let array_with_laser = [];
let temp = [];
let cutting_spot = [];
let ans = 0;

// 레이저 표시하기
for(let i =0; i < input.length; i++){
    if(input[i+1] && input[i] === '(' && input[i+1] === ')'){
        array_with_laser.push('0');
        laser_flag = true;
    } 
    else if(input[i] === ')' && laser_flag){ 
            laser_flag = false;
            
    } else {
        array_with_laser.push(input[i]);
    }
}


array_with_laser.forEach((e) => {
    switch(e){
        case '(': 
            cutting_spot.push(1);
            break;
        case '0':
            cutting_spot.forEach((e, idx) => {
                cutting_spot[idx] = e+1;
            })
            break;
        case ')':
            ans += cutting_spot.pop()
            break;
            
    }
})

console.log(ans)