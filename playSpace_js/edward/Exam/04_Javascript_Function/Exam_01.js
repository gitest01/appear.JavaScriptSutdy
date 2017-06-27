// 함수를 만드시오

// 1. 덧셈, 뺄셈, 곱셈, 나눗셈 하는 함수
// 2. 그 만든 함수를 실행하여 결과값은 return 받아 출력하시오 ( 함수에서 console.log X )
// 3. 문자열 2개를 받아 합쳐서 출력되는 함수를 만들어보세요 (ex. func(Hello, Ryan) ==> result : Hello Ryan)
// 4. 넘겨받은 매개변수가 숫자인지 아닌지 판단하는 함수를 만들어보세요
// 5. 넘겨받은 매개변수가 짝수인지 홀수인지 판단하는 함수를 만들어보세요

var a = 5;
var b = 7;

var aaa = function(){
    return a + b;
}

var bbb = function(){
    return a - b;
}
var ccc = function(){
    return a * b;
}
var ddd = function(){
    return a / b;
}

console.log(aaa());
console.log(bbb());
console.log(ccc());
console.log(ddd());

var text1 = function(str, str2){
    return str + ' ' + str2;
}

var ggg = text1('edward','hello');
var hhh = text1('edward2','hello3');

console.log(ggg);
console.log(hhh);


var numfun = function(num1,num2){
    if(typeof num1 == 'number' && typeof num2 == 'number'){
        return '숫자';
    }else{
        return '문자';
    }
}

var numf = numfun(1,3);
var strf = numfun('aaa','bbb');
console.log(numf);
console.log(strf);


var zzfun = function(num1){
    if(num1%2 == 1){
        return '홀수';
    }else{
        return '짝수';
    }
}

var nummm = zzfun(1);
var nummm2 = zzfun(2);

console.log(nummm);
console.log(nummm2);