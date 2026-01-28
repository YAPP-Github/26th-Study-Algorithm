// 28m
const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const [T, ...rest] = fs.readFileSync(filePath).toString().trim().split('\n');

// sort 
for(let i =0; i < T; i++){
    let N = rest.shift();
    const spliced_rest = rest.splice(0, N);

    let pass = 0;
    let applicants = [];
    let min_g1 = Infinity;
    let min_g2 = Infinity;

    spliced_rest.forEach((grades) => {
        applicants.push(grades.split(' ').map(Number))
    })

    applicants.sort((a,b) => a[0] - b[0]);


    applicants.forEach((line, idx) => {
        if(min_g2 > line[1] ){
            pass++;
            min_g2 = line[1];
            applicants[idx] = Infinity;
        }
    })

    console.log(pass)
}