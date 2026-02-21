// 1h (못 풀음)
const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const when = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
let ans = 'Never';

input.forEach((e, idx) => {
    const [h, m] = e.split(":").map(Number);
    input[idx] = 60*h +m;
})

const [twk1, twk2, next1, next2] = input;
let idx = 0;

while(twk1 + next1 * idx < 60 * 24 * 7){
    let twk = twk1 + next1 * idx;

    if((((twk - twk2) % next2 + next2)) % next2 === 0){
        ans = twk;
        break;
    }
    idx++;
} 

if(ans === 'Never'){
    console.log(ans)
} else {

    const h = Math.floor(ans / 60);
    const m = ans % 60;

    console.log(when[Math.floor(h / 24)]);
    console.log(
    `${String(h % 24).padStart(2, '0')}:${String(m).padStart(2, '0')}`
    );
}
