let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const count = Number(input.splice(0,1)[0]);

const visited = Array.from({length: count}, () => Array(count).fill(false));
const dir = [[1,0], [-1,0], [0,1], [0,-1]];

const dfs = (startRow, startCol) => {
  visited[startRow][startCol] = true;
  let houseCount = 1;  
  
  for(let [tempRow, tempCol] of dir) {
    const nowRow = startRow + tempRow;
    const nowCol = startCol + tempCol;
    
    if(nowRow >= 0 && nowRow < count && 
       nowCol >= 0 && nowCol < count && 
       !visited[nowRow][nowCol] && 
       input[nowRow][nowCol] === '1') {
      houseCount += dfs(nowRow, nowCol); 
    }
  }
  
  return houseCount; 
}

let totalCount = 0;
const resultArr = [];

for(let i = 0; i < count; i++) {
  for(let j = 0; j < count; j++) {
    if(!visited[i][j] && input[i][j] === '1') {
      const houseCount = dfs(i, j); 
      totalCount++;
      resultArr.push(houseCount);
    }
  }
}

resultArr.sort((a, b) => a - b);
console.log(totalCount);
console.log(resultArr.join('\n'));