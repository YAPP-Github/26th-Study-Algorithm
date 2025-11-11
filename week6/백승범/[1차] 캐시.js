function solution(cacheSize, cities) {
    var answer = 0;
    let cache = [];
    
    
    for(let i = 0; i < cities.length; i++)
    {
        //console.log(cache)
        if(cacheSize === 0)
        {
            
        }

        let k = 0;
        for(let j =0; j< cache.length; j++)
        {
            if(cache[j] === cities[i].toLowerCase())
            {
                //console.log(cache[j], cities[i].toLowerCase())
                cache.splice(j,1);
                cache.push(cities[i].toLowerCase())
                answer ++;
                k++;
                break;
            } 
        }
        if(k === 1)
        {
            //console.log(k)
            continue;
        }
        if(cache.length < cacheSize)
        {
         cache.push(cities[i].toLowerCase());

        }
        else if(cacheSize != 0){
            
          cache.splice(0,1);
          cache.push(cities[i].toLowerCase());
        }
         answer += 5;   

       
    }
    
    return answer;
}