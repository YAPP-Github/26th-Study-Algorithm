let fs = require('fs');
let filePath = process.platform === 'linux' ? '/dev/stdin' : '/input.txt';
let input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split('\n');

let [N, M] = input.shift().split(' ').map(Number);
let graph = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < M; i++) {
  let [a, b] = input[i].split(' ');
  graph[+b].push(+a);
}

let max = 0;
let result = [];

const bfs = (start) => {
  let queue = [start];
  let visited = new Array(N + 1).fill(false);
  let count = 0;
  let idx = 0;
  visited[start] = true;

  while (queue.length > idx) {
    let target = queue[idx++];
    for (let v of graph[target]) {
      if (visited[v]) continue;
      queue.push(v);
      count++;
      visited[v] = true;
    }
  }

  return count;
};

for (let i = 1; i <= N; i++) {
  let count = bfs(i);
  if (count > max) {
    max = count;
    result = [i];
  } else if (count === max) {
    result.push(i);
  }
}

console.log(result.join(' '));

