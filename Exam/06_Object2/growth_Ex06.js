var assert = require('../util/assert.js');

//상속
// 단순 객체 복사가 아닌 프로토타입 체인이 필요하다.
// 프로토타입 체인을 생성하는 제일 좋은 방법은 상위 객체의 인스턴스를 하위객체의 프로토타입으로 사용하는 것이다.
function Person(){}
Person.prototype.walk = function(){};

function Firefighter(){}
Firefighter.prototype = new Person();


var firePerson = new Firefighter();

assert(firePerson instanceof Firefighter, "firePerson은 Firefighter의 기능을 물려받았다.");
assert(firePerson instanceof Person, "firePerson은 Person의 프로토타입 기능을 물려받았다.");
assert(firePerson instanceof Object, "firePerson은 Object의 프로토타입 기능을 물려받았다.");
/*
     pass : firePerson은 Firefighter의 기능을 물려받았다.
     pass : firePerson은 Person의 프로토타입 기능을 물려받았다.
     pass : firePerson은 Object의 프로토타입 기능을 물려받았다.
 */

// 자바스크립트의 모든 네이티브 객체 생성자(Object, Array, String, Number, RegExp, Function)은 프로토타입을 가지고있다.


