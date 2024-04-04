//문자열을 순회해서 대문자면 소문자로, 소문자면 대문자로 변경

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});ㄴ

let input = [];
let arr = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0]; 
    for(i=0; i<str.length; i++){
        if(str[i] === str[i].toUpperCase())  //toUpperCase(): 문자 모두 대문자로 변경
        {
            arr.push(str[i].toLowerCase());   //toLowerCase(): 문자 모두 소문자로 변경
        }
        else
        {
            arr.push(str[i].toUpperCase());
        }
    }

    console.log(arr.join('')); //모든 요소를 문자열로 바꾸는데, 매개변수로 받는 값으로 구분점을 생성하겠다는 뜻이다. 
}); //예를 들면, arr.join('-'); 로 되면, a-b-c-d-e로 문자열이 표시된다(a~e는 배열의 인덱스). 
