// 분할 정복 
// 40m 

// caution : 1 <= A , B , C <= 2,147,483,647
// 거듭하보면, number 범위 초과하기 때문에 BigInt 사용 필수 
const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt';
const [A,B,C] = fs.readFileSync(filePath).toString().trim().split(' ').map(BigInt)

const power = (a, n, mod) => {
    if (n === 0n) return 1n;
    if (n === 1n) return a % mod;

    const half = power(a, n / 2n, mod);

    if (n % 2n === 0n) return (half * half) % mod; 
    else return ((half * half) % mod * (a % mod)) % mod;
}

console.log((power(A, B, C)).toString());