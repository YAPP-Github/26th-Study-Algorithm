let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

//console.log(input);

const [row, col] = input.splice(0,1)[0].split(" ").map(Number);

const [startRow, startCol, startDir] = input.splice(0,1)[0].split(" ").map(Number);

//console.log(row,col, startRow, startCol, startDir);

const visited = Array.from({length : row});

visited.forEach((_,index) => visited[index] = Array.from({length : col}).fill(false));

//console.log(visited);

input.forEach((val,index) => input[index] = val.split(" ").map(Number));

//console.log(input);

const dir = [[-1,0], [0,1], [1,0], [0,-1]];

//일단 반시계 방향 처리 해야하고

let count = 0;

const clean = (tempRow, tempCol, tempDir) => {
  // 1. 현재 칸 청소
  if(!visited[tempRow][tempCol]) {
    visited[tempRow][tempCol] = true;
    count++;
  }

  // 2. 4방향 확인 (반시계 방향)
  for(let i = 0; i < 4; i++) {
    tempDir = (tempDir + 3) % 4;  // 반시계 회전
    
    const [tRow, tCol] = dir[tempDir];
    const nowRow = tempRow + tRow;
    const nowCol = tempCol + tCol;

    // 청소 안 된 빈 칸 발견
    if(nowRow >= 0 && nowRow < row && nowCol >= 0 && nowCol < col && 
       !visited[nowRow][nowCol] && input[nowRow][nowCol] === 0) {
      clean(nowRow, nowCol, tempDir);  
      return; 
    }
  }

  // 3. 4방향 모두 청소됨 → 후진
  const backDir = (tempDir + 2) % 4;  // 반대 방향
  const [tRow, tCol] = dir[backDir];
  const backRow = tempRow + tRow;
  const backCol = tempCol + tCol;

  // 후진 가능하면 후진 (방향 유지)
  if(backRow >= 0 && backRow < row && backCol >= 0 && backCol < col && 
     input[backRow][backCol] === 0) {
    clean(backRow, backCol, tempDir);  // 방향은 그대로
  }
  // 후진 불가능하면 종료
}

clean(startRow, startCol, startDir);
console.log(count);