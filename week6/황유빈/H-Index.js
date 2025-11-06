function solution(citations) {
    var answer = 0;
    for(let i=0; i<=citations.length;i++){
        if(citations.filter(item=>item >= i).length >= i){
            answer=i
        }
    }
    return answer;
}