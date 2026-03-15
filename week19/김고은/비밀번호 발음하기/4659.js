// include 는
const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : __dirname + '/input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')

let vowel = ['a', 'e', 'i', 'o', 'u'];

function getValidation (str) {
    let pwd = str.split('')
    if(!pwd.some((ch) => vowel.includes(ch))) return false; // 모음 등장 조건

    for(let i=0; i< pwd.length; i++){
        if(i > 0 && (pwd[i] === pwd[i-1]) ){
            if(pwd[i] !== 'e' && pwd[i] !== 'o') return false; 
        } 
        if(i > 1){
            let now = vowel.includes(pwd[i]);
            let prev1 = vowel.includes(pwd[i-1]);
            let prev2 = vowel.includes(pwd[i-2]);

            if((now && prev1 && prev2)|| (!now && !prev1 && !prev2)) return false;
        } 
    }
    return true;    
}

input.forEach((E) => {
    if(E === 'end') return;
    if(getValidation(E)) console.log(`<${E}> is acceptable.`)
    else console.log(`<${E}> is not acceptable.`)
})

