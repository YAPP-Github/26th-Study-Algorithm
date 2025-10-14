let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0]);
const tree = {};

for (let i = 1; i <= N; i++) {
    const [node, left, right] = input[i].split(' ');
    tree[node] = {
        left: left === '.' ? null : left,
        right: right === '.' ? null : right
    };
}

const preorder = (node, result = []) => {
    if (node === null) return result;
    
    result.push(node);
    preorder(tree[node].left, result);
    preorder(tree[node].right, result);
    
    return result;
}

const inorder = (node, result = []) => {
    if (node === null) return result;
    
    inorder(tree[node].left, result);
    result.push(node);
    inorder(tree[node].right, result);
    
    return result;
}

const postorder = (node, result = []) => {
    if (node === null) return result;
    
    postorder(tree[node].left, result);
    postorder(tree[node].right, result);
    result.push(node);
    
    return result;
}

console.log(preorder('A').join(''));
console.log(inorder('A').join(''));
console.log(postorder('A').join(''));