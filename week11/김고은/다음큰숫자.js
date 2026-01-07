function solution(n) {
    let flag = true;
    
    let target_num =  countOne(transformToBinary(n))
    
    while(flag) {
        let bigger_num = ++n;
        let compare_num = countOne(transformToBinary(bigger_num));
        
        if(target_num == compare_num){
            return bigger_num;
        }
    }
}

function transformToBinary(n) {
    let binary = [];
    
    while(n >= 1){
        binary.unshift(n % 2);
        n = Math.floor(n / 2);
    }
    return binary;
}

function countOne(binary) {
    let count = 0;
    
    binary.forEach((e) => {
        if(e == 1) count++;
    })
    
    return count;
}