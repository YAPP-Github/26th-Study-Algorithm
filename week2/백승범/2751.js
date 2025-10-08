let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.splice(0,1);

const tempSet = new Set([...input]);


const answerArr = [...tempSet].map(Number);

answerArr.sort((a,b) => a - b);

console.log(answerArr.join('\n'));