const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const board = input.slice(1).map(line => line.split(' ').map(Number));

let visited = Array(N).fill(false);
let answer = Infinity;

function getDiff() {
    let start = 0;
    let link = 0;

    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            if (visited[i] && visited[j]) {
                start += board[i][j] + board[j][i];
            } else if (!visited[i] && !visited[j]) {
                link += board[i][j] + board[j][i];
            }
        }
    }

    answer = Math.min(answer, Math.abs(start - link));
}

function dfs(depth, start) {
    if (depth === N / 2) {
        getDiff();
        return;
    }

    for (let i = start; i < N; i++) {
        visited[i] = true; // start 팀에 넣어버림 
        dfs(depth + 1, i + 1);
        visited[i] = false; // 링크팀에 넣어버림  
    }
}

dfs(0, 0);
console.log(answer);