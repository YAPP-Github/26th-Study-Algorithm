let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [count, rel] = input[0].split(" ").map(Number);

const arr = Array.from({ length: count + 1 }, () => []);

for (let i = 1; i <= rel; i++) {
  const [one, two] = input[i].split(" ").map(Number);
  arr[one].push(two);
  arr[two].push(one);
}

function bfs(start) {
  const visited = Array(count + 1).fill(false);
  const dist = Array(count + 1).fill(0);

  let queue = [start];
  visited[start] = true;

  while (queue.length) {
    const cur = queue.shift();
    for (let next of arr[cur]) {
      if (!visited[next]) {
        visited[next] = true;
        dist[next] = dist[cur] + 1;
        queue.push(next);
      }
    }
  }

  return dist.reduce((a, b) => a + b, 0);
}

let answer = 1;
let minValue = Infinity;

for (let i = 1; i <= count; i++) {
  let result = bfs(i);
  if (result < minValue) {
    minValue = result;
    answer = i;
  }
}

console.log(answer);