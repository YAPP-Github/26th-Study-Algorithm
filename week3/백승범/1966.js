let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let line = 0;
const T = parseInt(input[line++]);  

const results = [];

for (let t = 0; t < T; t++) {
    const [N, M] = input[line++].split(' ').map(Number);
    const priorities = input[line++].split(' ').map(Number);
    
    const queue = [];
    for (let i = 0; i < N; i++) {
        queue.push({ priority: priorities[i], index: i });
    }
    
    let printCount = 0;  
    
    while (queue.length > 0) {
        const current = queue.shift();  
        
        const hasHigherPriority = queue.some(doc => doc.priority > current.priority);
        
        if (hasHigherPriority) {
            queue.push(current);
        } else {
            printCount++;
            
            if (current.index === M) {
                results.push(printCount);
                break;
            }
        }
    }
}

console.log(results.join('\n'));