const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let ans = []
const [N, C] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let arr_map = new Map();

for(let i =0; i < N; i++){
    if(arr_map.has(arr[i])){
        let num = arr_map.get(arr[i])
        arr_map.set(arr[i], num +1);
    } else {
        arr_map.set(arr[i], 1);
    }
}

arr = Array.from(arr_map).sort((a, b) => b[1] - a[1])

arr.map((e) => {
    let [num, count] = e;

    while(count > 0){
        ans.push(num)
        count--;
    }
})


console.log(ans.join(" "))