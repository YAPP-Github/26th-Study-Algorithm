function solution(word) {
    var answer = 0;
    let vowel = ['A', 'E', 'I', 'O', 'U'];
    let word_Arr = word.split('');
    let weight = Array.from({length: 5}).fill(0);
    
    // 각 자리에 대해 필요한 순회수 [781, 156, 31, 6, 1]
    // A, ... , AUUUU 
    for(let i =0; i <=4; i++){
        for(let j =i; j >=0; j--){
            weight[4-i] += Math.pow(5, j)
        }
    }
    
    word_Arr.forEach((e, idx) => {
        let position = vowel.indexOf(e);
        answer += position * weight[idx] + 1
    })
    
    console.log(weight)
    return answer;
}