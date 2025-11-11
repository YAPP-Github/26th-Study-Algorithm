function solution(p) {
    p.sort()
    
   for(let i = 1; i < p.length; i++){
       if(p[i].indexOf(p[i-1]) == 0){
           return false;
       }
   }
    return true
}