function solution(n) {
    let ans = 0;
    
    for(let i = n; i >= 1; i--){
        let sum = 0;
        for(let j = i; j >= 1; j--){
            sum += j;
            if(sum > n) break; // 안되는 값 빨리 버려주기
            if (sum === n) ans++;
        }
    }
    return ans
}