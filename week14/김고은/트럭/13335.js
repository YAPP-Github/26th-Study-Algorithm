// 50m
const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

// queue
const [n, w, l] = input[0].split(' ').map(Number);
const cars = input[1].split(' ').map(Number);
let bridge = Array.from({length: w}).fill(0);
let crossed_cars = 0;
let onLoadedWeight = 0;
let time = 0;

for(let i =0; i <n; i++){
    while(onLoadedWeight - bridge[w-1] + cars[i] > l){
        bridge.unshift(0);
        let popped_car = bridge.pop();
        onLoadedWeight -= popped_car;
        time++;
        if(popped_car !== 0) crossed_cars++;
    }

    onLoadedWeight += cars[i];
    bridge.unshift(cars[i]);
    let popped_car = bridge.pop();
    onLoadedWeight -= popped_car;
    time++;
    if(popped_car !== 0) crossed_cars++;

}

while(n > crossed_cars){
    let popped_car = bridge.pop();
    if(popped_car !== 0) crossed_cars++;
    time++;
}

console.log(time)