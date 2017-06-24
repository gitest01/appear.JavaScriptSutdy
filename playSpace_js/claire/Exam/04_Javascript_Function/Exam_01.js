// 함수를 만드시오

// 1. 덧셈, 뺄셈, 곱셈, 나눗셈 하는 함수
// 2. 그 만든 함수를 실행하여 결과값은 return 받아 출력하시오 ( 함수에서 console.log X )
// 3. 문자열 2개를 받아 합쳐서 출력되는 함수를 만들어보세요 (ex. func(Hello, Ryan) ==> result : Hello Ryan)
// 4. 넘겨받은 매개변수가 숫자인지 아닌지 판단하는 함수를 만들어보세요
// 5. 넘겨받은 매개변수가 짝수인지 홀수인지 판단하는 함수를 만들어보세요


// 1. 덧셈, 뺄셈, 곱셈, 나눗셈 하는 함수
// function sum(num1, num2) {
//     return num1 + num2;
// }
// console.log(sum(8,9));
//
// function sub(num1, num2) {
//     return num1 - num2;
// }
// console.log(sub(5,7));
//
// function mul(num1, num2) {
//     return num1 * num2;
// }
// console.log(mul(4,8));
//
// function mod(num1, num2){
//      return num1 / num2;
// }
// console.log(mod(50,2));
//
// // 3. 문자열 2개를 받아 합쳐서 출력되는 함수를 만들어보세요 (ex. func(Hello, Ryan) ==> result : Hello Ryan)
// function txt(str, str1) {
//     return str +' '+ str1;
// }
// console.log(txt('hello', 'ryan'));
//
// // 4. 넘겨받은 매개변수가 숫자인지 아닌지 판단하는 함수를 만들어보세요
// function num(arg) {
//     if (typeof arg === 'number'){
//         console.log('숫자입니다')
//     }else {
//         console.log('숫자가아닙니다')
//     }
// }
// num('ㅂㅈㄷ')
//
// // 5. 넘겨받은 매개변수가 짝수인지 홀수인지 판단하는 함수를 만들어보세요
// function even(i) {
//     if (i % 2 == 0){
//         console.log('짝수')
//     }else {
//         console.log('홀수')
//     }
// }
// even(22)
//
// //
// function tree(j) {
//
//     if (j % 2 == 0, j >= 10, j++){
//         console.log(' ')
//     }else {
//         console.log('*')
//     }
// }
// tree(2)


//===================================================================================
// 고양이 관리 (2017/06/24)
// 1 . 고양이 객체 만들기 이름 만들어주기 나이추가 상태 추가(default : 배고파요)(생성자함수로! 함수는 프로토타입으로!!)
// 2 . 이름출력
// 3 . 나이출력
// 4 . 고양이 상태가 배고프다면 출력함수실행 3초후에 ( 고양이이름 + 고양이상태 ) ex. 빵야가 배고파요를 출력
//		 아니면 바로실행
// 5 . 고양이 밥주기
// 6 . 다시 고양이 상태출력 (배불러여 ~)
// 7 . 고양이 산책시키기 -> 상태 배고파요 -> 밥주기
//===================================================================================

// var cat ={};
// console.log(typeof cat);
//
// var cat = {
//     name : 'claire',
//     year : '2015',
//     state : '배고픔',
// };
// console.log(cat);


//생성자
// function Cat(name, year, state){
//     this.name = name;
//     this.year = year;
//     this.state = state;
//
// }
//
// var claire = new Cat('claire', 2015, '배고픔');
// var kitty = new Cat('kitty', 2016, '배고픔');


// var Cat = {
//     name : 'claire',
//     age : '12',
//     state : '배고파요',
//
//     // getName : function () {
//     //     console.log(this.age);
//     // }
// };
// console.log(Cat);


//===================================================================================
// function Cat(name, age) {
//     this.name = name;
//     this.age = age;
//     this.state = '배고파요 ㅠㅠ';
// }
//
// Cat.prototype.getName = function () {
//     return.this.name;
// };
// Cat.prototype.getAge = function () {
//     return.this.age;
// };
// Cat.prototype.setState = function (state) {
//     return.state = state;
// };
// Cat.prototype.getState = function () {
//     return.this.state;
// };
// Cat.prototype.meal = function () {
//     console.log(this.name + '식사중');
//     this.setState('배불러요 :)');
// };
// Cat.prototype.walk = function () {
//     console.log(this.name + '산책중');
//     this.setState('배고파요 T_T');
// };
//
// var cat = new Cat ('claire', 12);
// console.log('생성된 고양이', cat);
// console.log('생성된 고양이 이름 : ', cat.getName());
// console.log('생성된 고양이 나이 : ', cat.getAge());
// console.log('생성된 고양이 상태 : ', cat.getName() +'는'+ cat.getState());
// cat.meal();
// console.log('생성된 고양이 상태 : ', cat.getName() +'는'+ cat.getState());
// cat.walk();
// console.log('생성된 고양이 상태 : ', cat.getName() +'는'+ cat.getState());
//===================================================================================


//클로저
var calc = (function(){
    var index = 0;
    function add(num, num2){
        return num + num2;
    }
    function sub(num, num2){
        return num - num2;
    }
    function plusIndex(){
        return index++;
    }
    return {
        add : add,
        sub : sub,
        plusIndex : plusIndex
    }
})();

var result = calc.add(1,3);
console.log('add :', result);
var result2 = calc.sub(3,5);
console.log('sub :', result2);
console.log(calc.plusIndex());
console.log(calc.plusIndex());
console.log(calc.plusIndex());
console.log(calc.plusIndex());