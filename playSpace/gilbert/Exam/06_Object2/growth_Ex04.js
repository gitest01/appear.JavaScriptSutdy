var assert = require('../util/assert.js');

// 인스턴스 타입과 생성자
function Animal(){}

var dog = new Animal();

assert(typeof dog == "object", "인스턴스의 타입은 object다");
assert(dog instanceof Animal, "dog는 Animal로 부터 생성되었다.");
console.log('dog.constructor은 뭐가찍힐까?', dog.constructor);
// function Animal(){}
assert(dog.constructor == Animal, "Animal을 통하여 dog객체를 생성하였다.");

console.log("================================================================");

// 테스트
var dog2 = new dog.constructor();

assert(typeof dog2 == "object", "인스턴스의 타입은 object다");
assert(dog2 instanceof Animal, "dog는 Animal로 부터 생성되었다.");
console.log('dog.constructor은 뭐가찍힐까?', dog2.constructor);
// function Animal(){}
assert(dog2.constructor == Animal, "Animal을 통하여 dog2객체를 생성하였다.");