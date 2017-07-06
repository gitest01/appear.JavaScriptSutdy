# Function (함수)
### 소개
1. 함수란 어떤 특정 작업을 수행하기 위해 필요한 일련의 구문들을 그룹화하기 위한 개념이다.
2. 동일한 작업을 반복적으로 수행해야 한다면, 미리 작성된 함수를 재사용할 수 있다.
3. 함수도 객체이다. 다른 객체와 구분될 수 있는 특징은 호출할 수 있다는 것이다.
4. 함수도 객체(일급 객체 First-class object)이므로 다른 값들처럼 사용할 수 있다. 즉 변수나 객체, 배열 등에 저장될 수 있고 다른 함수에 전달되는 인수로도 사용될 수 있으며 함수의 반환값이 될 수도 있다.

#### 일급객체? 
참고: [https://ko.wikipedia.org/wiki/%EC%9D%BC%EA%B8%89_%EA%B0%9D%EC%B2%B4]
다음과 같은 조건을 만족할 때 일급 객체라고 말할 수 있다.

1. 변수나 데이터 구조안에 담을 수 있다.
2. 파라미터로 전달 할 수 있다.
3. 반환값(return value)으로 사용할 수 있다.
4. 할당에 사용된 이름과 관계없이 고유한 구별이 가능하다.
5. 동적으로 프로퍼티 할당이 가능하다.

### Function 정의법
1. 함수선언식(Function declaration)
2. 함수표현식(Function expression)
3. Function() 생성자 함수

#### 함수선언식(Function declaration)
```js
function sum(num1, num2) {
  return num1 + num2;
}
```
1. 함수명    
함수선언식의 경우, 함수명은 생략할 수 없다. 함수명은 함수 몸체에서 자신을 재귀적(recursive) 호출하거나 자바스크립트 디버거가 해당 함수를 구분할 수 있는 식별자의 역할을 한다.
2. 매개변수 목록    
0개 이상의 목록으로 괄호로 감싸고 콤마로 분리한다. 다른 언어와의 차이점은 `매개변수의 자료형`을 기술하지 않는다는 것이다. 이 때문에 함수 몸체 내에서 매개변수의 자료형 체크가 필요할 수 있다.
3. 함수 몸체    
실제 함수가 호출되었을 때 실행되는 구문들의 집합이다. 중괄호({ })로 구문들을 감싸고 return 문으로 결과값을 반환할 수 있다. 이를 반환값(return value)라 한다.

#### 함수표현식(Function expression)
```js
var sum = function(num1, num2) {
  return num1 + num2; // 리턴값
}
```
함수표현식으로 정의한 함수는 함수명을 `생략`할 수 있다. 이러한 함수를 `익명 함수`(anonymous function)이라 한다. 함수표현식에서는 함수명을 생략하는 것이 일반적이다.
함수는 일급객체이기 때문에 변수에 할당할 수 있는데 이 변수는 함수명이 아니라 할당된 함수를 가리키는 참조값을 저장하게 된다. 함수 호출시 이 변수가 함수명처럼 사용된다.
```js
var sum = function(num1, num2) { // 함수의 주소값 할당
  return num1 + num2;
}
console.log(sum(1,3)); // 4
```

```js 
var sum = function sum(num1, num2) { // 함수의 주소값 할당
  return num1 + num2;
}
```
결국 함수선언식도 함수표현식과 동일하게 함수 리터럴 방식으로 정의되는 것이다.

#### 함수 호이스팅(Function Hoisting)
```js
var sum = sum(1,3); // 선언되기전에 미리사용 O 함수 호이스팅

function sum(num1, num2){
   return console.log(num1+num2);
}
```
자바스크립트는 ES6의 let, const를 포함하여 모든 선언(var, let, const, function, function*, class)을 호이스팅(Hoisting)한다.     
`호이스팅`이란??       
var 선언문이나 function 선언문 등을 해당 Scope의 맨 위로 옮기는 것을 말한다. 즉 자바스크립트는 코드를 실행하기 전에 var 선언문과 function 선언문을 해당 스코프의 맨위로 옮긴다.     
함수 호이스팅이 발생하는 원인은 자바스크립트 변수 생성과 초기화가 분리되어 진행되기 때문이다.
```js
var sum = sum(1,3); // 선언되기전에 미리사용 X  변수 호이스팅

var sum = function(num1, num2){
   return console.log(num1+num2);
}
```
변수 호이스팅은 변수 생성과 할당이 분리되어 진행된다. 즉 변수 선언만 호이스팅되고 값의 초기화는 변수 선언문에서 이루어 진다.     

TIP : 또한 함수선언식으로 함수를 정의하면 사용하기에 쉽지만 대규모 애플리케이션을 개발하는 경우 인터프리터가 너무 많은 코드를 VO에 저장하므로 애플리케이션의 응답속도는 현저히 떨어질 수 있으므로 주의해야 할 필요가 있다.

#### 반환값 (return value)
1. return 키워드는 함수를 호출한 코드에게 값을 반환할 때 사용한다.
2. 함수는 배열 등을 이용하여 한 번에 여러 개의 값을 리턴할 수 있다.
3. 함수는 반환을 생략할 수 있다. 이때 함수는 암묵적으로 undefined를 반환한다.
4. 자바스크립트 해석기는 return 키워드를 만나면 함수의 실행을 중단한 후, 함수를 호출한 코드로 되돌아간다. 만일 return 키워드 이후에 다른 구문이 존재하면 그 구문은 실행되지 않는다.

#### arguments 속성
arguments 속성은 함수 호출 시 전달된 인수들의 정보를 배열의 형태로 담고 있는 객체인 arguments 객체를 값으로 갖는다.
arguments 객체는 함수 내에서 지역변수처럼 쓰인다. 즉 함수 외부에서는 사용할 수 없다.
```js
function sum(){
  console.log(arguments); // [1, 2, 3, 4, callee: function, Symbol(Symbol.iterator): function]
}
sum(1,2,3,4);
```
#### length 속성
length 속성은 함수 정의 시 작성된 매개변수 갯수를 의미한다.
```js
function foo() {}
console.log(foo.length); // 0

function bar(x) {
  return x;
}
console.log(bar.length); // 1
```

#### name
함수명을 나타낸다. 기명함수의 경우 함수명을 값으로 갖고 익명함수의 경우 빈문자열을 값으로 갖는다.
```js 
// 기명 함수표현식(named function expression)
var namedFunc = function multiply(a, b) {
  return a * b;
};
// 익명 함수표현식(anonymous function expression)
var anonymousFunc = function(a, b) {
  return a * b;
};

console.log(namedFunc.name);     // multiply
console.log(anonymousFunc.name); // ''
```
#### 즉시호출함수표현식 (IIFE, Immediately Invoke Function Expression)
함수의 정의와 동시에 실행되는 함수를 즉시호출함수라고 한다. 최초 한번만 호출되며 다시 호출할 수는 없다. 이러한 특징을 이용하여 최초 한번만 실행이 필요한 초기화 처리등에 사용할 수 있다.    
```js
// 기명 즉시실행함수(named immediately-invoked function expression)
(function myFunction() {
  var a = 3;
  var b = 5;
  return a * b;
}());

// 익명 즉시실행함수(immediately-invoked function expression)
var result = (function() {
  var a = 3;
  var b = 5;
  return a * b;
}());
console.log(result); // 15
```
자바스크립트에서 가장 큰 문제점 중의 하나는 글로벌 스코프에 정의된 것은 코드 내의 어디서든지 접근이 가능하다는 것이다. 하지만 외부에 공유되면 곤란하거나 공유될 필요가 없는 속성이나 메서드가 있다.     
즉시실행함수 내에 처리 로직을 모아 두면 혹시 있을 수도 있는 변수명 충돌을 방지할 수 있어 이를 위한 목적으로 사용되기도 한다.

#### 내부 함수 (Inner function)
함수 내부에 정의된 함수를 내부함수라 한다. 내부함수 child는 자신을 포함하고 있는 부모함수 parent의 변수에 접근할 수 있다. 하지만 부모함수는 자식함수(내부함수)의 변수에 접근할 수 없다.
```js
function parent(param) {
  var parentVar = param; // Hello
  function child() {
    var childVar = 'gilbert';
    console.log(parentVar + ' ' + gilbert); // Hello lee
  }
  child();
  console.log(parentVar + ' ' + childVar);
      // Uncaught ReferenceError: childVar is not defined
}
parent('Hello');
```
또한 내부함수는 부모함수 외부에서 접근할 수 없다.
```js
function sayHello(name){
  var text = 'Hello ' + name;
  var logHello = function(){ console.log(text); }
  logHello();
}
sayHello('gilbert');  // Hello gilbert
logHello('gilbert');  // logHello is not defined
```
#### 콜백 함수 (Callback function)
콜백함수는 함수를 명시적으로 호출하는 방식이 아니라 특정 이벤트가 발생했을 때 시스템에 의해 호출되는 함수를 말한다. 콜백함수가 자주 사용되는 대표적인 예는 이벤트 핸들러 처리이다.
```js
<!DOCTYPE html>
<html>
<body>
  <button id="myButton">Click me</button>
  <script>
    var button = document.getElementById('myButton');
    button.addEventListener('click', function() {
      console.log('button clicked!');
    });
  </script>
</body>
</html>
```
콜백 함수는 매개변수를 통해 전달되고 전달받은 함수의 내부에서 어느 특정시점에 실행된다.

#### __proto__ 속성
모든 객체는 자신의 프로토타입을 가리키는 [[Prototype]]이라는 숨겨진 프로퍼티를 가진다. 크롬, 파이어폭스 등에서는 숨겨진 [[Prototype]] 속성이 __proto__ 속성으로 구현되어 있다. 즉 __proto__과 [[Prototype]]은 같은 개념이다.    
[[Prototype]] 속성(__proto__ 속성)을 가지며 이를 통해 자신의 부모 역할을 하는 프로토타입 객체를 가리킨다.     
함수의 프로토타입 객체는 Function.prototype이며 이것 역시 함수이다.

#### prototype 속성
모든 함수 객체는 prototype 속성을 갖는다. 주의해야 할 것은 prototype 속성은 프로토타입 객체를 가리키는 [[Prototype]] 속성(__proto__ 속성)과는 다르다는 것이다.    
prototype 속성과 [[Prototype]] 속성은 모두 프로토타입 객체를 가리키지만 관점의 차이가 있다.
[[Prototype]] 속성
- 모든 객체가 가지고 있는 속성이다.
- 객체의 입장에서 자신의 부모 역할을 하는 프로토타입 객체을 가리키며 함수 객체의 경우 Function.prototype를 가리킨다.
prototype 속성
- 함수 객체만 가지고 있는 속성이다.
- 함수 객체가 생성자로 사용될 때 이 함수를 통해 생성된 객체의 부모 역할을 하는 객체를 가리킨다.
- 함수가 생성될 때 만들어 지며 constructor 속성을 가지는 객체를 가리킨다. 이 constructor 속성은 함수 객체 자신을 가리킨다.

```js
function square(number) {
  return number * number;
}

// console.dir(square);
console.dir(square.__proto__);
console.dir(square.prototype);

console.log(square.__proto__ === Function.prototype); // true ①
console.log(square.__proto__ === square.prototype);   // false
console.log(square.prototype.constructor === square); // true ②
console.log(square.__proto__.constructor === square.prototype.constructor); // false
```

#### Prototype chain
자바스크립트는 특정 객체의 프로퍼티나 메서드에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티 또는 메서드가 없다면 [[Prototype]] 프로퍼티가 가리키는 링크를 따라 자신의 부모 역할을 하는 프로토타입 객체의 프로퍼티나 메서드를 차례대로 검색한다


                                                      


