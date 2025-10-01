let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(String);

const temp = input[0].split(" ");

const col = Number(temp[1]); 

const row = Number(temp[0]); 

const arr = input.slice(1).map(line => line.split(""));

let sum = 10000000000;

const caculationFunc = (startRow, startCol) => {
  let startWSum = 0;
  let startBSum = 0;

  for(let i = startRow; i < startRow + 8; i++ ) {
    for(let j = startCol; j < startCol + 8; j++ ) {
      const cur = arr[i][j];
      const tempW = ((i + j) % 2) === 0 ? 'W' : 'B';
      const tempB = ((i + j) % 2) === 0 ? 'B' : 'W';
      if(cur !== tempW) {
        startWSum ++;
      }
      if(cur !== tempB) {
        startBSum ++;
      }
    }
  }
  return Math.min(startWSum, startBSum);
}


for(let i = 0; i <= row - 8; i++) { 
  for(let j = 0; j <= col - 8; j++) {
    const tempSum = caculationFunc(i,j, 0);
    if(tempSum < sum)
    {
      sum = tempSum;
    }
  }
}

console.log(sum);