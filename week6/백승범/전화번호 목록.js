function solution(phone_book) {
    var answer = true;
    const len = phone_book.length;
    
    phone_book.sort();
    
    for(let i=0; i<len-1; i++)
    {
        let value = phone_book[i];
        let value_len = value.length;
        //console.log(value, phone_book[i+1].slice(0,value_len))
        if(value === phone_book[i+1].slice(0,value_len))
        {
            return false;
        }
    }
    
    
    
    return answer;
}