function solution(numbers, target) {
    let count =0;
    
    function bfs (sum, idx) {
        if(idx == numbers.length){
            if(sum == target) count +=1;
            return;
        }
        bfs(sum + numbers[idx], idx+1);
        bfs(sum - numbers[idx], idx+1);
    }
    
    bfs(0,0);
    
    return count
}
