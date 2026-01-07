function solution(s) {
    let splited_by_space_words = s.split(' ');
    let answer = '';
    
    splited_by_space_words.forEach((word, idx) => {
        word.split('').forEach((letter, idx) => {
            let formatted_string = '';
            if(letter === ' ') formatted_string = ' ';
            else if(idx % 2 === 0) formatted_string = letter.toUpperCase();
            else formatted_string = letter.toLowerCase();
            answer += formatted_string;
        })
        if(idx !== splited_by_space_words.length -1) answer += ' ';
    })
    
    return answer;
}