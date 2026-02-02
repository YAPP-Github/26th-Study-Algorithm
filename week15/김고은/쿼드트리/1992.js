// 1h
const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const [N, ...rest] = fs.readFileSync(filePath).toString().trim().split('\n');

let origin = [];

rest.forEach((line) => {
    origin.push(line.split('').map(Number));
})

function quad (row, col, size) {
    // 탈출조건
    if(isContaineSameNum(row, col, size)){
        return String(origin[row][col]);
    }

    // 분할 
    let half_size = Math.floor(size / 2);

    // 정복
    return (
        '(' +
        quad(row, col, half_size) +
        quad(row, col + half_size, half_size) +
        quad(row + half_size, col, half_size) +
        quad(row + half_size, col + half_size, half_size) +
        ')'
    )
}

console.log(quad(0,0, N));

function isContaineSameNum (row, col, size) {
    let first = origin[row][col];

    for(let i =row; i <row+size; i++){
        for(let j =col; j < col+size; j++){
            if(first !== origin[i][j]) return false;
        }
    }

    return true;
}