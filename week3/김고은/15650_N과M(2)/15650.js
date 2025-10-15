const fs = require("fs");

const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const [N, M] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const ans = [];
let temp = [];
let visited_Arr = Array.from({length: N +1}).fill(false); 

const MnN = (idx, count) => {
    if(count === M){
        ans.push(temp.join(" "))
    }

    for(let i = idx; i <= N; i++){
        if(visited_Arr[i]) continue;
        visited_Arr[i]= true;
        temp.push(i);
        MnN(i, count +1);
        temp.pop();
        visited_Arr[i] = false;
    }
}

MnN(1, 0);

console.log(ans.join("\n"))