var assert = require('.././assert.js');

//1. 객체 인스턴스 생성
var person = {};
person.name = "appear";
person.age = 25;
person.job = "Front Developer";

// 문제점 :
// 위에 코드에는 생성자 개념이 전혀없다.
// 그런데, 같은 타입의 객체에 대해 여러 인스턴스를 생성해야 한다면? 매번 같은 행동을 반복할 것이다.
// 자바스크립트에서도 java와 같이 new 연산자를 지원해준다.
// 그런데 자바스크립트의 new는 단지 빈 객체를 생성해줄뿐이다.

//2. new연산자와 new연산자를 사용하지 않은경우
function Animal(){}
Animal.prototype.walk = function(){
    return true;
};

var ani1 = Animal();
console.log('ani1에 뭐가찍힐까? ', ani1);
assert(ani1 === undefined , "ani1 인스턴스가 만들어지지 않음");

var ani2 = new Animal(); // 생성자
console.log('ani2에는 뭐가 찍힐까?', ani2);
console.log('ani2.walk에는 뭐가 찍힐까?', ani2.walk);
assert(ani2 && ani2.walk() , "인스턴스가 존재 , 메서드 호출이 가능");

// 프로토타입은 추가하다가아닌 덧붙이다로 표현할 수 있다.







