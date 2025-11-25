const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N,_] = input.shift().split(' ').map(Number);
let friends = Array.from({length: N+1}, () => [])
let kevin_bacon_Arr = []


input.forEach((e) => {
    const [f1, f2] = e.split(' ').map(Number)
    friends[f1] = [...friends[f1], f2];
    friends[f2] = [...friends[f2], f1];
})

const BFS = (start, end) =>  {
    let kevinNum = 0;
    let idx = 0;
    let needToVisite = [];
    let visited = Array.from({length: N}).fill(false);

    needToVisite.push([start,kevinNum])
    visited[start] = true;

    while(needToVisite.length > idx){
        let [start_friend, num] = needToVisite[idx++];
        if(start_friend === end) return num;

        for(let i of friends[start_friend]){
            if(visited[i]) continue;
            needToVisite.push([i, num+1]);
            visited[i] = true;
        }
    }
}
for(let f1 = 1; f1 <= N; f1++){
    let kevin_bacon = 0;
    for(let f2 = 1; f2 <=N; f2++){
        if(f1 === f2) continue;
        kevin_bacon += BFS(f1, f2);
        
    }
    kevin_bacon_Arr.push(kevin_bacon);
}


let min = Math.min(...kevin_bacon_Arr);
console.log(kevin_bacon_Arr.indexOf(min)+1)
