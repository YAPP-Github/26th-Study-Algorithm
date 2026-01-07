// function solution(s) {
//     let splited_str = s.split('');
    
//     let idx = 0;
    
//     while(splited_str.length - 1 > idx){
//         if(splited_str[idx] === splited_str[idx+1]) {
//             splited_str.splice(idx, 2);
//             idx = 0;
//         } 
//         else idx++;
//     }
//     return splited_str.length === 0? 1: 0
// }

function solution(s) {
    let splited_str = s.split('');
    let stack = [];
    
    splited_str.forEach((e, idx) => {
        if(idx === 0) stack.push(e);
        else {
            if(e !== stack[stack.length -1]) stack.push(e);
            else {
                stack.pop()
            }
        }
    }) 
    
    return stack.length ===0? 1:0;
}