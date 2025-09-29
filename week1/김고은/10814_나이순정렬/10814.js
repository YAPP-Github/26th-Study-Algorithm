let fs = require('fs');
let filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, ...arr] = input;

let members = [];

for(let i =0; i < arr.length; i++) {
    const [age, name] = arr[i].split(' ')
    members.push([+age, name])
}

members.sort((a,b) => a[0] - b[0])

for(let i = 0; i < members.length; i++){
    console.log(members[i].join(' '))
}
