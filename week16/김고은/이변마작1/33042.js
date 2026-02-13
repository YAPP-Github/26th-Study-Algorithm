// Map 자료형 
// 10m
const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
let [N, orders] = fs.readFileSync(filePath).toString().trim().split('\n');

let map = new Map();
let ans = 0;
orders = orders.split(' ');

for(let i = 0; i < +N; i++){
    if(map.has(orders[i])){
        let prev = map.get(orders[i])
        map.set(orders[i], prev + 1)
    } else {
        map.set(orders[i], 1);
    }

    if(map.get(orders[i]) > 4) {
        ans = i + 1
        break;
    }
}

console.log(ans)

