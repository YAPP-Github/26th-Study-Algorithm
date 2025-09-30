let fs = require('fs');
let filePath = process.platform === 'linux'? '/dev/stdin': __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim();

let ans = 0;

let can_divide_five = 0;
let can_divide_two = 0;

for(let num = +input; num >= 1; num--){
    if(num % 2 === 0) {
        can_divide_two += divide_loop(num, 2)
    }
    if(num % 5 === 0) {
        can_divide_five += divide_loop(num, 5)
    }
    
}

function divide_loop (origin_input, num) {
    let count = 0;
    let temp = origin_input;

    if(temp % num === 0) {
        while(temp % num === 0){
            count += 1;
            temp /= num
        } 
    }

    return count;
}

ans = Math.min(can_divide_five, can_divide_two);

console.log(ans)