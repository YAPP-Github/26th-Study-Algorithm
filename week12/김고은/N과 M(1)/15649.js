const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt'
const [N,M] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

let temp = [];
let visited = Array.from({length: N+1}).fill(false);

function recursion (i) {
    if(i=== M) {
        console.log(temp.join(' '))
        return;
    }

    for(let n = 1; n <= N; n++){
        if(visited[n]) continue;
        temp.push(n);
        visited[n] = true;
        recursion(i+1);
        visited[n] = false;
        temp.pop();
    }
    
}

recursion(0);
