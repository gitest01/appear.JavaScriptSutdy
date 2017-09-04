// 즉시실행

// 클로저 : 함수 안에 함수 안에 변수 (프로그램이 끝날 때가지 ) / 즉시실행으로 감싸주고
// private 자바나 c ( 한 영역을 만들기 위해 클로저 사용)
var temp = []; // temp를 전역 x , 고유한 영역에 놓고 그 안에서만 사용하고 싶다
// 전역 변수를 없애고 싶다


var c = (function () { // 함수를 통해 모듈을 만든 것
    var temp = []; // 지역변수

    function  add(num) {
        temp.push(num);
        console.log(temp);
    }
    function  getTemp() { // 실행됐는지 확인하고 싶을 때

    }
    return {
        'add' : add, // add 라는 함수가 즉시실행
        'getTemp' : getTemp
    }
})(); // 함수 선언 이고 실행하기 위해

c.add(); // 'add' 를 명시


// 계산기 calc (모듈패턴)
// 1. private 배열 []
// 2. add 숫잘를 더해서 결과 값을 넣는 함수
// 3. sub 빼는 함수 결과 값을 배열에 넣고
// 4. 배열의 정보를 콘솔에 찎어주는 함수

var calc = (function () {
    var result = []; // private
    // 메모리 제이션 : 2+4 > 과정이 엄청 복잡하다 했을 때
    function add(num, num2){
        result.push({
            type : num + "+" + num2,
            result : num + num2
        });
    }
    function sub(num, num2){
        result.push(num - num2);
    }
    function showResult() {
        console.log(result);
    }
    return {
        add : add,
        sub : sub,
        showResult : showResult
    }
})(); // 기능 자체를

calc.add(2, 4);
calc.showResult(); // { type: '2+4', result: 11}


// 많이 쓰이는 모듈패턴 es5
// 생성자 :
var CalcModule = (function () {
    var CalcModule = function () { // CalcModule 불러오기 위해 이름을 넣어 줌
        this.result = [];
    }; // 생성자 함수 : 이 아이가 실행되면서 상위에 있는 CalcModule 이 된다

    CalcModule.prototype.add = function (num, num2) {
        this.result.push(num, num2);
    }; // 여러번 실행하지 말고 공유해야 할 것을 프로토타입에 넣어 준다
    CalcModule.prototype.sub = function (num, num2) {
        this.result.push(num, num2);
    };
    CalcModule.prototype.showResult = function () {
        this.result.push(this.result);
    };
    return CalcModule;
})(); // 함수 자체를

var Calc = new CalcModule(); // new 는 상위에서 this.OOO 이 있어야 사용 가능
Calc.add(7, 4);
Calc.sub(7, 4);
Calc.showResult();