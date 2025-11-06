// n풀이
function solution(citations) {
    var answer = 0;
    for(let i=0; i<=citations.length;i++){
        if(citations.filter(item=>item >= i).length >= i){
            answer=i
        }
    }
    return answer;
}
// 다른 풀이 nlogn
function solution(citations) {
    citations.sort((a,b)=>b-a)
    var answer = 0;
    
    for(let i=0; i<citations.length;i++){
        if(citations[i] > i){
            answer++
        }
    }
    return answer;
}
//[6,5,3,1,0]
