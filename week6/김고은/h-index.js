function solution(c) {
    let sorted_c = c.sort((a,b) => a-b);
    
    let max = sorted_c[c.length -1];
    let h_idx = 0;
    
    for(let i =0; i <= max; i++){
        let less_citations = 0;
        let idx = 0;
        
        while(1) {
            if(sorted_c[idx] >= i) {
                less_citations = idx;
                break
            }
            idx++;
        }
        let qualified_citations = c.length - less_citations;
        
        // 기준 충족 
        if(less_citations <= i && qualified_citations >= i){
            // 갱신 가능 
            if(i > h_idx) h_idx = i;
        }
        
    }
    return h_idx;
}

