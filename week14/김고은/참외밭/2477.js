// 50m 
const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const [N, ...rest] = fs.readFileSync(filePath).toString().trim().split('\n');

let maxWidth = 0;
let maxHeight = 0;
let maxWidIdx = 0;
let maxHeightIdx = 0;

// input 은 항상 육각형의 길이 
// maxWidth 의 idx +3 => 작은 사각형의 높이
// vice versa
rest.forEach((line, idx) => {
    const [dir, length] = line.split(' ').map(Number)
    if((dir === 4 || dir === 3) && length > maxHeight){
        maxHeight = length;
        maxHeightIdx = idx;
    }

    if((dir === 2 || dir === 1) && length > maxWidth) {
        maxWidth = length;
        maxWidIdx = idx;
    }
})

let maxSquare = maxHeight * maxWidth;
let smallSqure = rest[(maxHeightIdx + 3) % 6].split(' ')[1] * rest[(maxWidIdx + 3) % 6].split(' ')[1]  

console.log(N * (maxSquare - smallSqure))