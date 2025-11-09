function solution(citations) {
    
    const arr = citations.sort((a,b) => a - b);
    
    
    const len = citations.length
    
    
    for(let i =0; i< len; i++) {
        const now = len - i;
        if(now <= arr[i]) {
            return now;
        }
    }
    
    return 0;
}