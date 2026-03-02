// 완전 빡구현... 이런거 보면 요령으로 풀 생각하지말기 
// 1h 10m
const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const [N, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

let candy = [];
let ans = 1;


for(let i = 0; i < N; i++){
    candy.push(arr[i].split(''))
}

function swap (x, y, n_x, n_y){
    let temp = candy[x][y];
    candy[x][y] = candy[n_x][n_y];
    candy[n_x][n_y] = temp;
}

function getColMax (x) {
    let best = 1;
    let current = 1;

    for(let i =1; i <N; i++){
        if(candy[x][i] === candy[x][i-1]) current++;
        else current = 1;

        if(current > best) best = current;
    }
    return best
}

function getRowMax (y) {
    let best = 1;
    let current = 1;

    for(let i =1; i <N; i++){
        if(candy[i][y] === candy[i-1][y]) current++;
        else current = 1;

        if(current > best) best = current;
    }
    return best
}

function getmax (x, y, n_x, n_y) {
    let max = Math.max(
        getColMax(x),
        getColMax(n_x),
        getRowMax(y),
        getRowMax(n_y),
    )
    
    return max;
}

for(let i =0; i <N; i++){
    let count = Math.max(
        getColMax(i),
        getRowMax(i)
    )
    if(count > ans) ans = count; 
}

// swap 
for(let i =0; i <N; i ++){
    for(let j=0; j < N; j++){
        // 우측 swap
        if(j + 1 < N  && candy[i][j] !== candy[i][j+1]){
            swap(i,j,i,j+1);
            let count = getmax(i,j,i,j+1);
            swap(i,j,i,j+1);

            if(count > ans) ans = count; 
        }

        // 아래 swap 
        if(i+1 < N && candy[i][j] !== candy[i+1][j]){
            swap(i,j,i+1,j);
            let count = getmax(i,j,i+1,j);
            swap(i,j,i+1,j);

            if(count > ans) ans = count; 
        }
    }
}

console.log(ans)