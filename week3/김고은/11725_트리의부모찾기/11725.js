const fs = require("fs");

const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const [N, ...rest]= fs.readFileSync(filePath).toString().trim().split('\n');

let tree = Array.from({length: +N + 1}, () => []);
let visited = Array.from({ length: +N + 1 }, () => false);
let need_to_visite = [];
let ans = [];

for(let i =0; i < rest.length; i++){
    const [node1, node2] = rest[i].split(" ").map(Number)
    tree[node1] = [...tree[node1], node2]
    tree[node2] = [...tree[node2], node1]
}

for(let i =0; i < tree[1].length; i++){
    need_to_visite.push([1, tree[1][i]]);
}

visited[1] = true;
let idx = 0;

while (need_to_visite.length > idx){
    let [from, to] = need_to_visite[idx++];
    if(!visited[to]){
        visited[to] = true;
        ans[to] = from;

        tree[to].forEach((e) => {
            if(e !== from) {
                need_to_visite.push([to, e]);
            }
        })
    }
}

for (let i = 2; i <= N; i++) {  
    console.log(ans[i]);
}
