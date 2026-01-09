function solution(a, b, n) {
   let ans = 0;
    
    while(n >= a) {
        let chance = Math.floor(n /a);
        let rest = n % a
        
        n = chance * b + rest;
        ans += chance * b
    }
    
    return ans
}
