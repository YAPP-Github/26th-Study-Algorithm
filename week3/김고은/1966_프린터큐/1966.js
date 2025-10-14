const fs = require("fs");

const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let ans = [];
let T = input[0];

for(let i =1; i <= T; i++){
    let [N, M] = input[i*2 -1].split(" ").map(Number);
    let print_dummy = input[i*2].split(" ").map(Number);
    
    ans.push(printQueue(print_dummy, M))
}

function printQueue (arr, idx) {
    let max = 0;
    let count = 1;

    while(1){
        max = Math.max(...arr); // 높 우선순위 
        let first = arr.shift();

        if(first === max) {
            if(idx == 0) break;
            else {
                max = 0;
                count+=1;
            }
        } else arr.push(first);

        idx = (idx - 1 + arr.length) % arr.length
    }
    return count;
}

console.log(ans.join("\n"))