const fs = require("fs");
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const [input, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const [K, N] = input.split(" ").map(Number);
let wires = arr.map(Number)

let start = 1;
let end = Math.max(...wires);
let ans_long = 0;

function getWireCount (long) {
    let count = 0;

    wires.forEach((wire) => {
        count += Math.floor(wire / long)
    })

    return count;
}

while(start <= end){
    let mid_cm = Math.floor((start + end) / 2 );
    let count = getWireCount(mid_cm);

    if(count >= N){
        if(mid_cm > ans_long) ans_long = mid_cm; 
        start = mid_cm +1; // 나눠진 랜선수가 많으면, 길이가 너무 작음 -> start 키움
    } 

    else if (N > count){
        end = mid_cm - 1; // 나눠진 랜선수가 적으면, 길어가 너무 큼 -> end 줄임
    }
}

console.log(ans_long)