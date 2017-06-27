// 함수를 만드시오

// 1. 덧셈, 뺄셈, 곱셈, 나눗셈 하는 함수
// 2. 그 만든 함수를 실행하여 결과값은 return 받아 출력하시오 ( 함수에서 console.log X )
// 3. 문자열 2개를 받아 합쳐서 출력되는 함수를 만들어보세요 (ex. func(Hello, Ryan) ==> result : Hello Ryan)
// 4. 넘겨받은 매개변수가 숫자인지 아닌지 판단하는 함수를 만들어보세요
// 5. 넘겨받은 매개변수가 짝수인지 홀수인지 판단하는 함수를 만들어보세요


// 1. 덧셈, 뺄셈, 곱셈, 나눗셈 하는 함수
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(8,9));

function sub(num1, num2) {
    return num1 - num2;
}
console.log(sub(5,7));

function mul(num1, num2) {
    return num1 * num2;
}
console.log(mul(4,8));

function mod(num1, num2){
     return num1 / num2;
}
console.log(mod(50,2));

// 3. 문자열 2개를 받아 합쳐서 출력되는 함수를 만들어보세요 (ex. func(Hello, Ryan) ==> result : Hello Ryan)
function txt(str, str1) {
    return str +' '+ str1;
}
console.log(txt('hello', 'ryan'));

// 4. 넘겨받은 매개변수가 숫자인지 아닌지 판단하는 함수를 만들어보세요
function num(arg) {
    if (typeof arg === 'number'){
        console.log('숫자입니다')
    }else {
        console.log('숫자가아닙니다')
    }
}
num('ㅂㅈㄷ')

// 5. 넘겨받은 매개변수가 짝수인지 홀수인지 판단하는 함수를 만들어보세요
function even(i) {
    if (i % 2 == 0){
        console.log('짝수')
    }else {
        console.log('홀수')
    }
}
even(22)