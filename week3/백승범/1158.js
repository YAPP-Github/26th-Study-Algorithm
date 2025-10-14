let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const queue= Array.from({ length: input[0] }, (_, i) => i + 1);

const ans = [];

while (queue.length) {
  for (let i = 0; i < input[1] - 1; i++) {
    queue.push(queue.shift());
  }
  ans.push(queue.shift());
}

console.log(`<${ans.join(', ')}>\n`);