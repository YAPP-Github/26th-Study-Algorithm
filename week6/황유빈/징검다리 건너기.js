function canCross(mid,stones,k){
    let count=0;
    for(let i=0;i<stones.length;i++){
        if(stones[i] < mid){
            count++
        }else{
            count=0
        }
        if(count >=k){
            return false
        }
    }
    return true
}

function solution(stones,k){
    
    let left = 1
    let right =200000000
    let answer
    
    while(left <= right){
        let mid = Math.floor((left+right)/2)
        if(canCross(mid,stones,k)){
            left=mid+1
            answer = mid
        }else{
            right=mid-1
        }
    }
    return answer
}