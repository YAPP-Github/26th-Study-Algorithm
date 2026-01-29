// 1h 10m
const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const [N, ...rest] = fs.readFileSync(filePath).toString().trim().split('\n');

let food = [];
let minus = Infinity;
let temp  = [];

rest.forEach((l) => {
    food.push(l.split(' ').map(Number));
})

// 연속된 조합이면 안됨 
// for(let i =0; i < N; i++){
//     let sour = food[i][0];
//     let bitter = food[i][1];
//     if(minus > Math.abs(bitter - sour)) minus = Math.abs(bitter - sour);

//     for(let n = i+1; n < N; n++){
//             sour *= food[n][0];
//             bitter += food[n][1];
//             if(minus >  Math.abs(bitter - sour)) minus =  Math.abs(bitter - sour);
//     }
// }

// 부분집합
function recursion (idx) {
    if(idx === food.length) {
        let sour = 1;
        let bitter = 0;
        temp.forEach((f) => {
            sour *= f[0];
            bitter += f[1];
        })

        if(minus > Math.abs(bitter - sour) && temp.length > 0) minus = Math.abs(bitter - sour);
        return;
    }

    temp.push(food[idx]);
    recursion(idx+1);

    temp.pop();
    recursion(idx+1); 
}

recursion(0);


console.log(minus)