# 자바스크립트 

## 소개 
자바스크립트는 웹 브라우저에서 동작하는 스크립트 언어다. `초창기` 자바스크립트는 웹 페이지 제작에 있어서 보조적인 기능을 수행하기 위한 용도로써 밖에 사용되지않았다고한다.    
대부분의 로직은 웹 서버에서 실행되었고 클라이언트인 웹 브라우저에서는 HTML과 CSS 렌더링을 해주는 수준이었다. `Jquery`의 등장으로 DOM 핸들링이 간편해지면서 조금씩 발전을 이루었다.     
`Node.js`의 등장으로 서버개발쪽도 활발해지면서 많은 개발자들이 자바스크립트를 사용하게 되었다.

## 활용범위
##### 그렇다면 요즘 자바스크립트는 어디에 사용되는가??
브라우저 기반의 자바스크립트 라이브러리뿐만 아니라, Node.js와 같은 서버기반의 자바스크립트 환경에서 동작할 수 있는 라이브러리들이 쏟아지면서 웹 서버와 클라이언트 개발을 동시에 할 수 있는 수준까지 오게되었다. (웹개발, 서버개발, 애플리케이션개발 등..)

## 핵심 개념 
### 1. 객체
boolean, number, string, null, undefined를 제외한 모든것은 객체이다. number, string, boolean은 Wrapper함수가 존재하여 객체로써 사용될 수 있긴하다.     

### 2. 함수
자바스크립트에서는 함수도 객체로 취급한다. 함수는 [일급객체](https://ko.wikipedia.org/wiki/%EC%9D%BC%EA%B8%89_%EA%B0%9D%EC%B2%B4)로 다루어진다. 

### 3. 프로토타입
모든 객체는 숨겨진 링크인 프로토타입을 가진다. 이 링크는 해당 객체를 생성한 생성자의 프로토타입 객체를 가리킨다. [[Prototype]] 으로 표시된다. 이를 통하여 확장 또는 상속을 이룰 수 있다.

### 4. 실행 컨텍스트와 클로저
자바스크립트는 자신만의 독특한 실행 컨텍스트를 만들고 그 안에서 실행이 이루어진다. 실행 컨텍스트는 자신만의 유효범위를 갖는데 이 과정에서 클로저를 구현할 수 있다. 

## 자바스크립트의 단점
자바스크립트는 유연하고 뛰어난 표현력을 가지고 있지만 이러한 특성들 때문에 디버긴에 어려움이 있을 수 도 있다. 느슨한 `타입체크`는 개발자에게 타입에 대한 자유를 주지만 컴파일 타임에 잡지못한 오류는 고스란히 런타임 오류로 발견된다.     
`전역객체의 존재` 최상위 레벨의 객체는 모두 전역 객체안에 위치하는데 이때 충돌위험이 있을 수 있다. 항상 전역객체를 조심하자.     

### 자바스크립트 기본 타입 
기본타입 : 숫자, 문자열, 불린값, null, undefined     
자바스크립트는 `느슨한 타입 체크 언어`이다 때문에 변수를 선언하는 과정에서 데이터타입을 정해줄 필요가없다.   
자바스크립트는 변수에 어떤 형태의 데이터를 저장하느냐에 따라 변수의 타입이 결정된다.
```js
// 숫자 
var intNum = 10;
var floatNum = 0.1;

// 문자열
var singleQuoteStr = 'singleQuoteStr';
var dobuleQuoteStr = "dobuleQuoteStr";

// 불린타입
var boolVal = true;

// undefined 
var undefinedVal;

// null 
var nullVal = null;
```
### 숫자
자바스크립트에서는 모든 숫자를 64비트 부동 소수점 형태로 저장하기 때문에 하나의 숫자형만 존재한다.   
int, float 둘다 typeof연산결과는 number를 찍는다.

### 문자열
'' 또는 "" 로 생성한다. typeof의 결과는 string을 반환한다. `한번 정의된 문자열은 변하지 않는다.`    
```js
var str = 'string';
console.log(str[0], str[1], str[2], str[3], str[4], str[5]);
str[0] = 'a';
console.log(str); // string
```

### 불린값
true와 false 값을 나타내는 불린 값을 가질 수 있다. typeof는 boolean을 반환한다.    

### null과 undefined
두 값은 `값이 비어있음`을 나타낸다. 기본적으로 값이 할당되지 않은 변수는 undefined으로 나타낸다. undefined는 타입이자 값이다.    
null은 값이 비어있음을 나타내는데 사용한다. null타입은 typeof의 결과가 object로 떨어진다.

### 자바스크립트 참조 타입(객체 타입)
기본타입을 제외한 모든값은 객체다. 배열, 함수, 정규표현식등 모두 객체로 표현된다.   
객체는 key : value 형태의 프로퍼티들을 저장하는 컨테이너로서 Hash 자료구조와 비슷하다. 기본타입은 한개의 값만 가지지만     
객체는 여러개의 프로퍼티들을 포함할 수 있다. 프로퍼티에 함수를 포함할 수 있는데 프로퍼티안의 함수를 메서드라고 부른다.

### 객체생성
자바스크립트에서는 클래스라는 개념이 없다. 객체생성은 객체리터럴 또는 생성자함수 등 다른 방식을 사용한다.

### Object() 생성자 함수 
```js
var foo = new Object();
foo.name = 'foo';
foo.age = 25

console.log(typeof foo); // object
```

### 객체리터럴 방식
객체 리터럴은 {}을 이용해서 객체를 생성한다. {} 안에 아무것도 적지않으면 빈객체가 생성된다.    
```js
var foo = {
    name : 'foo',
    age : 25
};
console.log(typeof foo); // object
```

### 생성자 함수 
함수를 통해서도 객체를 생성할 수 있다.
```js
var Person = function(name, age){
    this.name = name;
    this.age = age;
};
var person = new Person('foo', 25);
console.log(typeof person); // object
```

### 객체 프로퍼티 읽기/쓰기/갱신 
객체를 생성하고 값을읽고 원하는값으로 갱신할 수 있다. 접근방법은 [] or . 두가지 방법이있다.    
```js
var foo = {
    name : 'foo',
    age : 25
}
console.log(foo.name);
console.log(foo['name']);

foo.name = 'newFoo';
console.log(foo.name); // newFoo;

foo.adress = '안양';
console.log(foo.adress); // 안양

// 만약 key 이름에 - 가 들어간다면 [] 로 꼭 값을 불러와야한다.
foo['full-name'] = 'fullName';
```
갱신 : 갱신시 이미 key값이 존재한다면 새로 생성되는게 아니라 기존값이 갱신된다.

### for in
 ```js
var foo = {
    name : 'foo',
    age : 25
};
var prop;
for(prop in foo){
    console.log(prop, foo[prop]); // name foo, age 25
}
```
### 객체 프로퍼티 삭제
객체의 프로퍼티를 delete 연산자를 이용해 즉시 삭제할 수 있다.
```js
var foo = {
    name : 'foo',
    age : 25
};
delete foo.name; 
console.log(foo); // name프로퍼티 삭제 -> foo -> age 
```

### 참조 타입의 특성 


