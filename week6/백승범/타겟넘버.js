function solution(numbers, target) {
    var answer = 0;
    
    function rec(num, index) {
        if(index >= numbers.length) {
            if(target === num)
            {
                answer++
            }
        } else {
            const num1 = num + numbers[index]
            const num2 = num - numbers[index]
            rec(num1, index + 1)
            rec(num2, index + 1)
        }
    }
    
    
    rec(numbers[0],1)
    rec(-numbers[0],1)
    
    
    return answer;
}