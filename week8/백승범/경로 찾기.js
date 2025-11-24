
let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

//console.log(input)

const count = Number(input[0])

const arr = Array.from({length: count + 1}, () => []);

//console.log(arr)

for(let i =1; i < count + 1; i ++) {
  arr[i] = input[i].split(" ").map(Number);
}

//console.log(arr)



const visited = Array.from({length: count + 1}, () => Array.from({length: count+1}).fill(0) );


const bfs = (start) => {
  const queue = [start];
  const check = Array(count + 1).fill(false);

  while (queue.length) {
    const now = queue.shift();

    for (let next = 1; next <= count; next++) {
      if (arr[now][next - 1] === 1 && !check[next]) {
        check[next] = true;
        visited[start][next] = 1;
        queue.push(next);
      }
    }
  }
};

for(let i = 1; i<count + 1; i++) {
  bfs(i)
}

let result = "";
for (let i = 1; i <= count; i++) {
  result += visited[i].slice(1).join(" ") + "\n";
}
console.log(result);

