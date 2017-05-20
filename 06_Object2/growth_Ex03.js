var assert = require('../util/assert.js');

// 의문? Ex02에서 보면 new를 통해 새 객체를 생성할때 기존객체의 프로토타입이 새로 복사가 되는걸까?
// 만약 프로토타입값이 단순히 객체로 복사된다고 가정하면 객체가 생성된후 프로토타입에 어떤 변경이 생기더라도 이는 객체에 영향을 주지 않아야한다.

// 테스트
function Animal(){
    this.flag = true;
}
