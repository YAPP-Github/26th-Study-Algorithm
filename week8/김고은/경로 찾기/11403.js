const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input.shift());
const graph = input.map(line => line.split(' ').map(Number));

const result = Array.from({ length: N }, () => Array(N).fill(0));

const search = (start, visited) => {
    for (let next = 0; next < N; next++) {
        if (graph[start][next] === 1 && !visited[next]) {
            visited[next] = true;
            search(next, visited);
        }
    }
};

for (let i = 0; i < N; i++) {
    const visited = Array(N).fill(false);
    search(i, visited);
    for (let j = 0; j < N; j++) {
        if (visited[j]) result[i][j] = 1;
    }
}

console.log(result.map(row => row.join(' ')).join('\n'));
