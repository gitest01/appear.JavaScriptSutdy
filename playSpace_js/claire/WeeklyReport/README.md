자바스크립트의 기본 개요
---
### 01. 소개
웹 브라우저에서 동작하는 객체기반의 스크립트 언어이다. 초창기 자바스크립트는 클라이언트인 웹 브라우저에서는 서버로부터 받은 HTML과 CSS, 데이터로 렌더링 해주는 수준으로 중요한 역할을 담당하지 못했으나 jQuery의 등장으로 DOM(Document Object Model)을 핸들링하게 되면서 발전하게 된다.
특히, Node.js의 등장으로 서버 개발이 활발해지면서 사용 빈도수가 증가하였다.

### 02. 자바스크립트의 활용 범위
브라우저 기반의 자바스크립트 라이브러리뿐만 아니라, Node.js와 같은 서버 기반의 자바스크립트 환경에서 동작할 수 있는 각종 라이브러리가 나오면서 웹 페이지 개발이 가능한 수준까지 오게 되었다.
- 웹 개발 : 크롬이나 파이어폭스 등 웹 브라우저들이 발전하면서 자바스크립트 엔진의 성능 향상
- 서버 개발 : Node.js의 출현으로 자바스크립트를 활용한 서버 개발
- 애플리케이션 개발

### 03. 자바스크립트의 핵심 개념
- 객체
boolean, number, string, null, undefined 를 제외한 모든 것
- 함수
일반적인 객체보다 더 많은 기능이 있는 객체
- 프로토타입
모든 객체는 숨겨진 링크인 프로토타입을 가진다. 이 링크는 해당 객체를 생성한 생성자의 프로토타입 객체
- 실행 컨텍스트와 클로저
자바스크립트는 자신만의 독특한 과정으로 실행 컨텍스트를 만들고 그 안에서 실행
실행 컨텍스트는 자신만의 유효 범위를 갖는데, 이 과정이서 클로저를 구현

### 04. 자바스크립트와 객체지향 프로그래밍
자바스크립트는 클래스를 지원하지 않지만 객체지향 프로그래밍이 가능하다. 프로토타입 체인과 클로저로 객체지향 프로그래밍에서 제시하는 상속, 캡슐화, 정보 은닉 등의 개념을 소화할 수 있다.

### 05. 자바스크립트와 함수형 프로그래밍
함수형 프로그래밍은 높은 수준의 모듈화를 가능하게 하는 효율적인 프로그래밍 방법이다. 자바스크립트는 주요 특징인 일급 객체로서의 함수 특성과 클로저를 활용하여 이를 가능하게하지만 이 때문에, 가독성을 떨어뜨리기도 한다.

### 06. 자바스크립트의 단점
자바스크립트는 유연한 언어이고 뛰어난 표현력을 가지고 있지만 이런 특성 때문에 디버깅의 어려움을 겪기도 한다. 느슨한 타입체크는 개발자에게 타입 체크에 대한 자유를 주지만, 컴파일 타임에서 잡지 못하는 오류는 런타임 오류로 발견된다. 전역 객체의 존재는 최상위 레벨의 객체들은 모두 전역 객체 안에 위치하는데, 이는 이름 충돌의 위험성이 있다.

[jQuery](https://jquery.com/) /
[Node.js](https://nodejs.org/en) /
[Knockout.js](http://knockoutjs.com/) /
[Backbone.js](http://backbonejs.org/)

---


자바스크립트 데이터 타입과 연산자
---
### 자바스크립트 기본 타입
- 기본 데이터 타입 (숫자, 문자열, 불린값, null, undefind)
- 참조 데이터 타입 (객체, 배열)
- 느슴한 타입 체크 언어 : 변수를 선언할 때타입을 미리 정하지 않고, var라는 한 가지 키워드로만 변수 선언
- 주의해야 할 연산자

```js
// 숫자 타입
var intNum = 10;
var floatNum = 0.1;

// 문자열 타입
var singleQuoteStr = 'single quote string';
var doubleQuoteStr = 'double quote string';
var singleCher = 'a';

// 불린 타입
var emptyVar = true;

// undefined 타입
var emptyVar;

// null 타입
var nullVar = Null;
```

### 01. 숫자
자바스크립트는 모든 숫자를 64비트 부동 소수점 형태로 저장하기 때문에 int, long, float, double 등과 같이 다양한 숫자 타입이 존재한다. var 키워드로 선언된 자바스크립트 변수에는 정수나 실수 구분 없이 그 값을 바로 저장할 수 있으므로, intNum 과 flaotNum 변수 모두 typeof 연산자의 결과값이 number 타입임을 확인할 수 있다

### 02. 문자열
문자열은 ' ' 또는 " " 로 생성한다. <br>
typeof 연산자 결과가 string으로 나온다. <br>
한 번 정의된 문자열은 변하지 않는다. 
```js
// str 문자열 생성 
var str = 'test';
console.log(str[0], str[1], str[2], str[3]); // (출력값) test

// 문자열의 첫 글자를 대문자로 변경?
str[0] = 'T';
console.log(str); // test
```

### 03. 불린값
true 와 false 값을 나타낸다.

### 04. null과 undefined
두 타입은 모두 '값이 비어있음'을 나타낸다.<br>
undefined는 타입이자, 값을 나타낸다.

```js
// null 타입 변수 생성
var nullVar = null;

console.log(typeof nullVar === null);   // false
console.log(nullVar === null);          // true
```
null 타입 변수인 nullVar의 typeof 결과는 null이 아닌 object

### 자바스크립트의 참조 타입(객체 타입)
숫자, 문자열, 불린값, null, undefind 같은 기본 타입을 제외한 모든 값은 객체로 표현된다.
객체는 단순히 '이름(key):값(value)' 형태의 프로퍼티들을 저장하는 컨테이너이다. 객체를 여러 프로퍼티를 포함 할 수 있으며 이러한 프로퍼티를 메서드라고 부른다.

### 01. 객체 생성
클래스라는 개녑이 없고, 객체 리터럴이나 생성자 함수 등 별도의 생성 방식이 존재한다.

객체 생성 방법
- 기본 제공 Object() 객체 생성자 함수를 이용하는 방법
- 객체 리터럴을 이용하는 방법
- 생성자 함수를 이용하는 방법
    
#### Object() 생성사 함수 이용
객체를 생성할 때, 내장 Object() 생성자 함수를 제공한다.
```js
// Object()를 이용해서 foo 빈 객체 생성
var foo = new Object();

// foo 객체 프로퍼티 생성
foo.name = 'foo';
foo.age = 30;
foo.gender = 'male';

console.log(typeof foo);    // Object
console.log(foo);           // {name: 'foo', age: 30, gender: 'male'}
```        

#### 객체 리터럴 방식 이용
객체 리터럴은 중괄호를 이용해 객체를 생성한다. {} 안에 아무것도 적지 않은 경우는 빈객체가 생성되며, 
중괄호 안에 '프로퍼티 이름' : '프로퍼티값' 형태로 표기하면, 해당 프로퍼티가 추가된 객체를 생성할 수 있다.  
```js
// 객체 리터럴 방식으로 객체 생성
var foo = {
    name : 'foo',
    age : 30,
    gender : 'male'
};

console.log(typeof foo);    // object
console.log(foo);           // {name: 'foo', age: 30, gender: 'male'}
```

#### 생성자 함수 이용
함수를 통해서 객체를 생성할 수 있다.

### 02.객체 프로퍼티 읽기/쓰기/갱신
객체는 새로운 값을 가진 프로퍼티를 생성하고, [] 와 . 를 사용하여 프로퍼티에 접근할 수 있다.
```js
// 객체 리터럴 방식을 통한 foo 객체 생성
var foo = {
    name : 'foo',
    major : 'computer science'
};

// 객체 프로퍼티 읽기
console.log(foo.name); // foo
console.log(foo['name']); // foo
console.log(foo.nickname); // undefined

// 객체 프로퍼티 갱신
foo.major = 'electronics engineering';
console.log(foo.major); //electronics engineering
console.log(foo['major']); //electronics engineering

// 객체 프로퍼티 동적 생성
foo.age = 30;
console.log(foo.age); // 30

// 대괄호 표기법만을 사용해야 할 경우
foo['full-name'] = 'foo bar';
console.log(foo['full-name']); // foo bar
console.log(foo.full-name); // NaN
console.log(foo.full); // undefined
console.log(name); // undefined
```
### 03. for in 문과 객체 프로퍼티 출력
for in 문을 사용하면, 객체에 포함된 모든 프로퍼티에 대해 루프를 수행할 수 있다.
```js
// 객체 리터럴을 통한 foo 객체 생성
var foo = {
    name: 'foo',
    age: 30,
    major: 'computer science'
};

// for in문을 이용한 객체 프로퍼티 출력
var prop;
for (prop in foo) {
    console.log(prop, foo[prop]);
}
```

### 04. 객체 프로퍼티 삭제
delete 연사자를 이용해 객체 프로퍼티를 삭제할 수 있다. 객체 자체를 삭제하지는 못한다.
```js
// 객체 리터럴을 통한 foo 객체 생성
var foo = {
    name : 'foo',
    nickname : 'babo'
}

console.log(foo.nickname);  // babo
delete foo.nickname;        // nickname 프로퍼티 삭제
console.log(foo.nickname);  // undefined

delete foo;                 // foo 객체 삭제 시도
console.log(foo.name);      // foo
```

### 참조 타입의 특성
객체의 모든 연산이 실제 값이 아닌 참조값으로 처라되기 때문에 객체를 참조타입이라 부른다.
```js
var objA = {
    val : 40
};
var objB = objA;

console.log(objA.val);  // 40
console.log(objB.val);  // 40

objB.val = 50;
console.log(objA.val);  // 50
console.log(objB.val);  // 50
```

### 01. 객체 비교
동등 연산자(==)를 사용하여 두 객체를 비교할 때도 객체의 프로퍼티값이 아닌 참조값을 비교한다는 것에 주의하자.
```js
var a = 100;
var b = 100;

var objA = { value: 100 };
var objB = { value: 100 };
var objC = objB;

console.log(a == b);  // true
console.log(objA == objB); // false
console.log(objB == objC); // true
```

### 02. 참조에 의한 함수 호출 방식
기본 타입의 경우는 `값에 의한 호출(call by value)방식`으로 동작한다. 
함수를 호출할 때 인자로 기본 타입의 값을 넘길 경우 호출된 함수의 매개변수로 `복사된 값`이 전달된다.

객체와 같은 참조타입의 경우 함수를 호출할 때 `참조에 의한 호출call by reference)방식`으로 동작한다.
```js
var a = 100;
var objA = { value: 100 };

function changeArg(num, obj) {
    num = 200;
    obj.value = 200;

    console.log(num);
    console.log(obj);
}

changeArg(a, objA);

console.log(a);
console.log(objA);
```