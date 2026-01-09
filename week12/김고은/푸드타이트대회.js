function solution(food) {
    let ans = '';
    
    let temp = [];
    for(let i =1; i < food.length; i++){
        let divide_By_2 = Math.floor(food[i] /2); 
        
        if(divide_By_2 === 0) continue;
        for(let j = 0; j < divide_By_2; j++){
            temp.push(i);
        }
    }
    
    ans += temp.join('');
    ans += 0;
    ans += temp.sort((a,b)=> b-a ).join('');
    
    return ans;
}