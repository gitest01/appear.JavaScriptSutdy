# Object (객체)
### 소개
자바스크립트에서 기본데이터타입 boolean, number, string, null, undefined를 제외한 모든것은 객체이다.     
null, undefined을 제외한 boolean, number, string도 객체처럼 다룰 수 있다.       
객체는 데이터를 한 곳에 모으고 구조화하는데 유용하다. 객체 하나는 다른 객체를 포함할 수 있기 때문에, 그래프나 트리와 같은 자료구조를 쉽게 표현할 수 있다.
### 속성 
객체는 이름(key)과 값(value)의 쌍인 속성들을 포함하는 컨테이너라고 할 수 있다. 속성은 속성명과 속성값으로 구성된다.
### 메서드(Method)
메서드는 객체에 제한되어 있는 함수를 의미한다. 즉 속성값이 함수일 경우, 일반 함수와 구분하기 위해 메서드라 칭한다.
```js
var obj = {
    add : function(){} // 메서드
}
function getNumber(){} // 일반함수
```
### 객체생성법(리터럴)
```js
var person = {}; // 빈객체 생성
console.log(typeof person); // object    

var person = {
  name: 'gilbert', // 속성 : key, value
  gender: 'male',
  sayHello: function(){ // 메서드
    console.log('Hi! My name is ' + this.name);
  }
};
console.log(typeof person); // object
console.log(person); // { name: 'gilbert', gender: 'male', sayHello: [Function: sayHello] }

person.sayHello(); // Hi! My name is Lee  객체의 메서드 실행
```
### 객체생성법(new Object)
constructor는 해당 Object가 어떤 Object를 상속 받았는지를 판단할 수 있는 기능인데, Object를 상속받기를 원했지만, new Object로 선언된 것의 리턴값이 자바스크립트 해석기가 스스로 판단해서 다른것을 리턴하는 결과가 되었다
```js
var o = new Object();
console.log(o.constructor === Object); // true

var o = new Object(1);
console.log(o.constructor === Number); // true
console.log(o.toFixed(2)); // "1.00"

var o = new Object("I am a string");
console.log(o.constructor === String); // true
console.log(typeof o.substring); // "function"

var o = new Object(true);
console.log(o.constructor === Boolean); // true
```
### 객체생성법 (사용자 정의 생성자 함수)
- 생성자 함수 이름은 일반적으로 대문자로 시작한다. 이것은 생성자 함수임을 인식하도록 도움을 준다.
- 속성 또는 메서드명 앞에 기술한 this는 생성자 함수로 생성될 인스턴스(instance)를 가리킨다. 따라서 this에 연결되어 있는 속성과 메서드는 public이다.
- 생성자 함수 내에서 선언된 일반 변수는 private이다. 즉 생성자 함수 내부에서는 자유롭게 접근이 가능하나 외부에서 접근할 수 있는 방법이 없다.
```js
var Person = function(name) {
  this.name = name;
  this.say = function() {
    return "I am" + this.name;
  };
}

var gilbert = new Person("Gilbert");
gilbert.say();
//new Person()을 호출할 때마다 메모리에 새로운 함수가 생성된다.
//say()라는 메서드는 생성된 객체마다 달라지는게 아니므로 비효율 적이기 때문에, prototype으로 정의하는 것이 좋다.
```
```js
function Person(name, gender) {
  var married = 'yes';        // private
  this.name = name;           // public
  this.gender = gender;       // public
  this.sayHello = function(){ // public
    console.log('Hi! My name is ' + this.name);
  };
}

var person = new Person('Lee', 'male');

console.log(typeof person);
console.log(person);

console.log(person.gender);  // 'male'
console.log(person.married); // undefined
```
### 속성 추가 
```js
var obj = {}; // 빈객체
obj.name = "gilbert";
console.log(obj); // Object {name: "gilbert"}
```
### 속성 삭제
```js
var obj = {}; // 빈객체
obj.name = "gilbert";
console.log(obj); // Object {name: "gilbert"}
delete obj.name; // 삭제
console.log(obj); // Object {}
```
### 속성 갱신
```js
var obj = {}; // 빈객체
obj.name = "gilbert";
console.log(obj); // Object {name: "gilbert"}
obj.name = "modify gilbert"; // 속성값 변경
console.log(obj); // Object {name: "modify gilbert"}
```
### 속성 탐색 
```js
var person = {
  'first-name': 'gilbert',
  'last-name': 'go',
  gender: 'male',
};

var prop;

for(prop in person)  {
  console.log(prop + ': ' + person[prop]);
}
/*
first-name: gilbert
last-name: go
gender: male
*/
```











## window 
브라우저의 요소들과 자바스크립트 엔진, 그리고 모든 변수를 담고 있는 객체, window는 모든 객체의 조상입니다.      
전역객체(글로벌객체)라고 합니다. 모든 객체를 다 포함하고 있기 때문에 window는 그냥 생략가능합니다 ex.window.console.log();     
브라우저 전체를 담당하는 게 Window 객체, 웹사이트만 담당하는게 Document 객체입니다. Document도 Window 객체 안에 들어있습니다. 
### window 전역메서드
#### window.close()
현재 창을 닫습니다. window는 생략 가능하기 때문에 그냥 close(); 해도되지만 다른 함수와 헛갈릴 수 있으니 window.close()를 사용합시다.
#### window.open()
새 창을 엽니다. 팝업 창의 형태로도 열 수 있고 새 탭으로도 열 수 있습니다. 첫 번째 인자로 주소를 받고, 두 번째 인자로 새 탭으로 열지, 현재 탭에 열지를 설정
```js
open('http://www.daum.net/'); // 새 탭
open('http://www.daum.net/', '_self'); // 현재 탭
open('', '', 'width=200,height=200'); // 가로세로 200px의 팝업창
```
#### window.encodeURI(), window.decodeURI()
주소에 한글이 들어가면 한글이 이상한 글자로 변환됩니다. 예를 들면, 자바스크립트는 '%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8'라는 매우 긴 문자열로 바뀝니다    
encodeURI(한글), 외계어를 한글로 바꾸고 싶을 때는 decodeURI(외계어)
#### window.setTimeout(함수, 밀리초), window.setInterval(함수, 밀리초)
setTimeout은 지정한 초 뒤에 실행되고, setInterval은 지정한 초마다 반복
```js
setTimeout(function() {
  alert('1초 뒤');
}, 1000);

setInterval(function() {
  console.log('1초마다');
});
```
clearTimeout과 clearInterval를 사용하면 실행을 멈추거나 반복을 멈출 수 있습니다.
```js
var timeout = setTimeout(function() {}, 1000);
clearTimeout(timeout);
```
#### window.getComputedStyle(태그)
태그의 스타일을 찾는 메소드입니다. 현재 적용된 CSS 속성 값을 알 수 있어 유용합니다.
```js
console.log(getComputedStyle(document.getElementById('app-root')));
```
### BOM
브라우저에 대한 정보 BOM(Browser object model)
#### navigator.userAgent
브라우저나, 운영체제(OS) 대한 정보가 있습니다(navigator.userAgent). userAgent 정보를 바탕으로 분석 사이트에서는 고객에 대한 정보를 분석
#### screen
화면에 대한 정보를 알려줍니다. 너비(width), 높이(height), 픽셀(pixelDepth), 컬러(colorDepth), 화면 방향(orientation), 작업표시줄을 제외한 너비와 높이(availWidth, availHeight) 등
#### location
location 객체는 주소에 대한 정보를 알려주고요(protocol, host, hostname, pathname, href, port, search, hash 속성을 이용). location.reload()로 새로고침도 가능합니다. location.replace()는 현재 주소를 다른 주소로 교체합니다.
```js
location.host; // "www.daum.net"
location.hostname; // "www.daum.net"
location.protocol; // "https:"
location.href; // "http://www.daum.net/search"
location.pathname; // "/search"
```
#### history
history는 앞으로가기(history.forward() 또는 history.go(1)), 뒤로가기(history.back() 또는 history.go(-1)) 같은 것을 관장합니다. 히스토리간에 이동(history.go(페이지수))할 수도 있습니다. history.length는 뒤로가기할 수 있는 페이지의 개수를 의미합니다.