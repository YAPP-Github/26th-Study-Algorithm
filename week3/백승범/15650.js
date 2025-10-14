let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

//console.log(input);

const answer = []
const selected = []

const [last, max] = input;


const dfs = (start, deps) => {

  if(deps === max) {
    answer.push(selected.join(' '));
    return;
  }
  for(let i = start; i <= last; i ++) {
    selected.push(i);
    dfs(i + 1, deps +1);
    selected.pop()
  }
}

dfs(1, 0);

console.log(answer.join("\n"))