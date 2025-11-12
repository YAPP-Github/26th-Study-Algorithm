function solution(cacheSize, cities) {
    let process_time = 0;
    let cache_arr = [];
    
    cities.forEach((e) => {
        let formatted_city = e.toUpperCase();
        // cache hit
        if(cache_arr.includes(formatted_city)){
            let idx = cache_arr.indexOf(formatted_city);
            cache_arr.splice(idx, 1)
            process_time += 1;
        } 
        // cache miss 
        else {
            if(cache_arr.length >= cacheSize) cache_arr.shift();
            process_time += 5;
        }
        if(cacheSize > 0) cache_arr.push(formatted_city);
    })
    return process_time;
}