let fs = require("fs")
let filePath = process.platform === "linux"? "/dev/stdin": __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [C, N] = input.splice(0,1)[0].split(" ").map(Number);

let arr = [];
let max_cost = C * 100 + 1;
let dp = Array.from({length: max_cost}).fill(0); // dp[비용] = 사람


for(let i = 0; i < N; i++){
    arr.push(input[i].split(' ').map(Number))
}

arr.sort((a,b) => a[0] - b[0]);

// cost를 기준으로, 최대 얼마나 많은 사람을 받을 수 있는지  bottom-up 
arr.map((each) => {
    let [cost, people] = each
    for(let c = cost; c < dp.length; c++){
        dp[c] = Math.max(dp[c], dp[c - cost] + people);
    }
})

for(let i =0; i < dp.length; i++ ){
    if(C <= dp[i]){
        console.log(i);
        return;
    }
}