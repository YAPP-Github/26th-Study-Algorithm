const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, ...arr] = input;
const filtered_arr = [];

// 중복된 단어는 하나만 남기고 제거
for(let i =0; i < N; i++){
    if(filtered_arr.includes(arr[i])) continue;
    filtered_arr.push(arr[i]);
}

filtered_arr.sort((a,b) => {
    // 1. 길이가 짧은 것부터 정렬
    if(a.length !== b.length) return a.length - b.length;

    // 2. 길이가 같으면 사전 순으로
    else {
        let idx = 0;
        while(a[idx] == b[idx]){
            idx +=1;
        }
        return a.charCodeAt(idx) -  b.charCodeAt(idx)
    }
})

console.log(filtered_arr.join("\n"))