let fs = require('fs');
let filePath = process.platform === 'linux' ? '/dev/stdin': __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.splice(0,1)[0];

let coordinate_arr = Array.from({length: N})

coordinate_arr.forEach((_, idx) => {
    coordinate_arr[idx] = input[idx].split(' ').map(Number)
})

coordinate_arr.sort((a, b) => {
    if(a[0] !== b[0])return a[0] - b[0]
    else return a[1] - b[1] 
})

coordinate_arr.map((e) => {
    console.log(e.join(" "))
})