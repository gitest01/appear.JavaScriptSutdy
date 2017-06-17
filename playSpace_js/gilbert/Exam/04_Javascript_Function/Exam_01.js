// 함수를 만드시오

// 1. 덧셈, 뺄셈, 곱셈, 나눗셈 하는 함수
// 2. 그 만든 함수를 실행하여 결과값은 return 받아 출력하시오 ( 함수에서 console.log X )
// 3. 문자열 2개를 받아 합쳐서 출력되는 함수를 만들어보세요 (ex. func(Hello, Ryan) ==> result : Hello Ryan)
// 4. 넘겨받은 매개변수가 숫자인지 아닌지 판단하는 함수를 만들어보세요
// 5. 넘겨받은 매개변수가 짝수인지 홀수인지 판단하는 함수를 만들어보세요

// 사칙연산
function add(num1, num2){
  return num1+num2;
}
function sub(num1, num2){
  return num1-num2;
}
function mul(num1, num2){
  return num1*num2;
}
function mod(num1, num2){
  return num1/num2;
}

var aResult = add(10,20);
console.log(aResult);
var sResult = sub(10,20);
console.log(sResult);
var mResult = mul(10,20);
console.log(mResult);
var modResult = mod(20,20);
console.log(modResult);

// 문자열
function addStr(str1, str2){
  return str1 + ' ' + str2
}
var str = addStr('Hello','Ryan');
console.log(str);

// 문자열 판단
function checkNumber(arg){
  // console.log(typeof arg); 이렇게해도되고 저렇게 해도되고
  console.log(isNaN(parseInt(arg)));
  isNaN(arg) ? console.log('문자입니다.') : console.log('숫자입니다.');
}
checkNumber('5/3'); // 문자입니다.
checkNumber(5);  // 숫자입니다.

function checkOdd(num){
  (num%2 === 0) ? console.log('짝수입니다.') : console.log('홀수입니다.');
}
checkOdd(10); // 짝수입니다
checkOdd(11); // 홀수입니다