var assert = require('../util/assert.js');

//상속
function Person(){}
Person.prototype.walk = function(){};

function Firefighter(){}
Firefighter.prototype = { walk : Person.prototype.walk}; // Person의 걷기 메서드를 복사하여 덧붙인다. 이는 상속이아니다.


var firePerson = new Firefighter();

assert(firePerson instanceof Firefighter, "firePerson은 Firefighter의 기능을 물려받았다.");
assert(firePerson instanceof Person, "firePerson은 Person의 프로토타입 기능을 물려받았다.");
assert(firePerson instanceof Object, "firePerson은 Object의 프로토타입 기능을 물려받았다.");
/*
     pass : firePerson은 Firefighter의 기능을 물려받았다.
     false : firePerson은 Person의 프로토타입 기능을 물려받았다.
     pass : firePerson은 Object의 프로토타입 기능을 물려받았다.
 */
// false : firePerson은 Person의 프로토타입 기능을 물려받았다. 어떻게 하면 성공시킬 수 있을까?
// Ex06으로 ~~

