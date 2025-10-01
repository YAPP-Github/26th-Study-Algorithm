let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [row, col] = input.splice(0, 1)[0].split(" ").map(Number);

let findCol, findRow;

const map = input.map((val, index) => {
  const arr = val.split(" ");
  const colIndex = arr.indexOf('2');  
  if (colIndex !== -1) {
    findCol = colIndex;
    findRow = index;
  }
  return arr;
});

const answerArr = Array.from({length: row}, () => Array(col).fill(-1));

const bfs = (startRow, startCol) => {
  const queue = [[startRow, startCol, 1]];
  const visited = Array.from({length: row}, () => Array(col).fill(false));
  visited[startRow][startCol] = true;
  answerArr[startRow][startCol] = 0;
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  while (queue.length > 0) {
    const [i, j, dist] = queue.shift();
    
    for (let [di, dj] of directions) {
      const tempi = i + di;
      const tempj = j + dj;
      
      if (tempi >= 0 && tempi < row && tempj >= 0 && tempj < col && 
          map[tempi][tempj] !== '0' && !visited[tempi][tempj]) {
        visited[tempi][tempj] = true;
        answerArr[tempi][tempj] = dist;
        queue.push([tempi, tempj, dist + 1]);
      }
    }
  }
};

bfs(findRow, findCol);

for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    if(map[i][j] === '0') {
      answerArr[i][j] = 0;
    } 
  }
}

answerArr.forEach(row => console.log(row.join(' ')));