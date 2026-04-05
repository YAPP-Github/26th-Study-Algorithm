function solution(N, road, K) {
    let ways = Array.from({length: N+1}, () => []);
    
    road.forEach((e) => {
        const [town1, town2, time] = e;
        ways[town1].push([town2, time])
        ways[town2].push([town1, time])
    })
    
    let queue = [[1,0]]; // [시작점, time]
    let dist = Array.from({length : N+1}, () => Infinity);
    dist[1] = 0
    
    // 다익스트라 
    while(queue.length > 0) {
        let [from, time] = queue.shift();

        ways[from].forEach((e) => {
            let [next_to, next_time] = e;
            let cost = next_time + time;
            
            if(dist[next_to] > cost){
                dist[next_to] = cost
                queue.push([next_to, cost])
            }
        })
    }
    return(dist.filter(c => K >= c).length)
}