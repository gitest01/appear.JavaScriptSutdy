var assert = require('.././assert.js');

// 프로토타입 생성과정에서의 우선순위
function Animal(){
    this.flag = false;
    this.walk = function(){
        console.log('인스턴스 메서드의 walk');
        return !!this.flag;
    }
}
Animal.prototype.walk = function(){
    console.log('프로토타입의 walk');
    return this.flag;
};

var dog = new Animal();
assert(dog.walk(), "프로토타입의 walk가 아니라 인스턴스 메서드의 walk가 실행된다.");
// pass : 프로토타입의 walk가 아니라 인스턴스 메서드의 walk가 실행된다.
// 인스턴스메서드가 프로토타입 메서드보다 우선순위가 높다.
// 실제로 이런경우는 없다. 초기화 순서 예제를 위해 사용 ...
// 순서
// 1. 프로토타입의 프로퍼티들이 새로 만들어진 객체 인스터스와 바인딩
// 2. 생성자 함수 내에서 정의한 프로퍼티들이 객체 인스턴스에 추가
// 결론 : 생성자내에서 만들어진 인스턴스 멤버가 프로토타입에 정의된 같은 이름의 프로퍼티를 재정의한다.


