const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const _ = input.splice(0,1);
const set_arr = new Set([...input]);

const ans = Array.from(set_arr).sort((a,b) => a-b)

console.log(ans.join("\n"));