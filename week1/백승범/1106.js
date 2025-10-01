let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");


const [C, N] = input.splice(0,1)[0].split(" ");

const countArr = input.map((val) => val.split(" ").map(Number));


const dp = [];

for(let i=0; i<C+100; i++) 
{
  dp.push(Infinity);
}

dp[0] = 0;


for(let[count,number] of countArr) {
  for(let i=number; i<C+100; i++)
  {
    dp[i] = Math.min(dp[i-number] + count, dp[i]);
  }
}

console.log(Math.min(...dp.slice(C)));