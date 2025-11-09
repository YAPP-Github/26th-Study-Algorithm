function solution(maps) {
    var answer = 10000000;
    
    const col = maps.length
    const row = maps[0].length
    const queue = []
    //const visited = new Array(col).fill(0)
    
    //console.log(visited)
    queue.push([0,0,1]) // x y num
    
    while(queue.length >0)
    {
        const node = queue.shift()
        //console.log(node)
        if(node[0] === (row-1) && node[1]=== (col-1)) // 도착했을 때
         {
             if(node[2] != 0 && node[2] < answer)
              {
                  //console.log(num)
                  answer = node[2]
              }
         }
        if(node[1]-1 >= 0 && maps[node[1]-1][node[0]] === 1)
         {
             
             maps[node[1]-1][node[0]] = 0
             queue.push([node[0],node[1]-1,node[2]+1])
         }
        if(node[1]+1 < col && maps[node[1]+1][node[0]] === 1)
         {
          //console.log(num+1,y+1,x)  
             maps[node[1]+1][node[0]] = 0
             queue.push([node[0],node[1]+1,node[2]+1])
         }    
        if(node[0] -1 >= 0 && maps[node[1]][node[0]-1] === 1)
         {
             //console.log(num+1,y,x-1)  
             maps[node[1]][node[0]-1] = 0
             queue.push([node[0]-1,node[1],node[2]+1])

         }   
        if(node[0]+1 < row && maps[node[1]][node[0]+1] === 1)
         {
             //console.log(num+1,y,x+1)  
             maps[node[1]][node[0]+1] = 0
             queue.push([node[0]+1,node[1],node[2]+1])
         } 
         
    }
  
    //console.log(maps)

    if(answer === 10000000)
    {
        return -1;
    }
    return answer;
}