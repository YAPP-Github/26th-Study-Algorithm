function solution(cacheSize, cities) {
    var answer = 0;
    let cache=[]
    const newCities = cities.map(item=>item.toLowerCase())
    
    for(let i=0;i<newCities.length;i++){
        if(cache.includes(newCities[i])){
            cache=cache.filter((item)=> item !==newCities[i])
            cache.push(newCities[i])
            answer+=1
        }else{
            answer+=5
            cache.push(newCities[i])
            if(cache.length > cacheSize){
                cache.shift()
            }
        }
        
    }
    return answer;
}
//[a,b,c] d-> [b,c,d] 
// 현재 도시가 캐시에 있으면 , 캐시에 있는 원소가 가장 마지막 요소로 간다.
//1. 캐시의 현재 도시가 없으면 +5 후 현재 도시를 캐시에 채운다
//2. 캐시의 현재 도시가 있으면 +1
//3. 캐시가 cacheSize 보다 크면 
//캐시 크기 5,["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]
// i =0 일 때 ['jeju'] answer=5
// i =1 일 때 ['jeju','pangyo'] answer=10
// i =2 일 때 ['jeju','pangyo','seoul'] answer=15
// i =3 일 때 ['jeju','pangyo','seoul','newyork'] answer=20
// i =4 일 때 ['jeju','pangyo','seoul','newyork',"LA"] answer = 25
// i =5 일 때 ['pangyo','seoul','newyork',"LA","SanFrancisco"] answer = 30
// i =6 일 때 ['pangyo','seoul','newyork',"LA","SanFrancisco"] answer = 31
// i =7 일 때 ['seoul','newyork',"LA","SanFrancisco",'Rome'] answer = 36
// i =8 일 때 ['newyork',"LA","SanFrancisco",'rome','paris'] answer = 41
// i =9 일 때 ["LA","SanFrancisco",'rome','paris','jeju'] answer = 46
// i =10일 때 []


