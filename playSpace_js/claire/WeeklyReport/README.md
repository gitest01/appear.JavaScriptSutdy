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
- 느슨한 타입 체크 언어 : 변수를 선언할 때 타입을 미리 정하지 않고, var라는 한 가지 키워드로만 변수 선언
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
문자열은 ' ' 또는 " " 로 생성한다. typeof 연산자 결과가 string으로 나온다. 한 번 정의된 문자열은 변하지 않는다. 
```js
// str 문자열 생성 
var str = 'test';
console.log(str[0], str[1], str[2], str[3]);    // test

// 문자열의 첫 글자를 대문자로 변경?
str[0] = 'T';
console.log(str);   // test
```

### 03. 불린값
true 와 false 값을 나타낸다.

### 04. null과 undefined
두 타입은 모두 '값이 비어있음'을 나타낸다. undefined는 타입이자, 값을 나타낸다.

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
클래스라는 개념이 없고, 객체 리터럴이나 생성자 함수 등 별도의 생성 방식이 존재한다.

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
객체 리터럴은 중괄호를 이용해 객체를 생성한다. {} 안에 아무것도 적지 않은 경우는 빈객체가 생성되며, <br>
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
console.log(foo.name);      // foo
console.log(foo['name']);   // foo
console.log(foo.nickname);  // undefined

// 객체 프로퍼티 갱신
foo.major = 'electronics engineering';
console.log(foo.major);     //electronics engineering
console.log(foo['major']);  //electronics engineering

// 객체 프로퍼티 동적 생성
foo.age = 30;
console.log(foo.age);       // 30

// 대괄호 표기법만을 사용해야 할 경우
foo['full-name'] = 'foo bar';
console.log(foo['full-name']);  // foo bar
console.log(foo.full-name);     // NaN
console.log(foo.full);          // undefined
console.log(name);              // undefined
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
delete 연사자를 이용해 객체 프로퍼티를 삭제할 수 있다. 객체 자체는 삭제할 수 없다.
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

console.log(a == b);        // true
console.log(objA == objB);  // false
console.log(objB == objC);  aaaa// true
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

### 프로토타입
자바스크림트의 `모든 객체는 자신의 부모 역할을 하는 객체와 연결`되어 있다. 이러한 부모 객체를 `프로토타입 객체(프로토타입)`라고 부른다.
```js
var dodo = {
    name: 'dodo',
    age: 2
};

console.log(dodo.toString());
console.dir(dodo);
```

### 배열
### 01. 배열 리터럴
배열 리터럴은 자바스크립트에서 새로운 배열을 만든 ㄴ데 사용하는 표기법이다. 객체 리터럴이 중괄호({})를 이용한 표기법이었다면 배열 리터럴을 대괄호([])를 사용한다.
```js
// 배열 리터럴을 통한 5개 원소를 가진 배열 생성
var colorArr = ['blue','yellow','green','white','red'];
console.log(colorArr[0]);   // blue
console.log(colorArr[1]);   // yellow
console.log(colorArr[4]);   // red
```
객체 리터럴에서는 프로퍼티 이름과 프로포티값을 모두 표기해야 하지만 배열 리처럴에서는 `각 요소의 값`만을 포함한다. 객체가 프로퍼티의 이름으로 대괄호나 마침표 표기법을 이용해 해당 프로퍼티에 접근했다면 배열의 경우는 앞 예제처럼 대괄호 내에 접근하고자 하는 원소에 배열 내 위치 인덱스값을 넣어서 접근한다

### 02. 배열의 요소 생성
객체가 동적으로 프로퍼티를 추가할 수 있듯이, 배열도 동적으로 배열 원소를 추가할 수 있다.
```js
// 빈 배열
var emptyArr = [];
console.log(emptyArr[0]);   // undefined

// 배열 요소 동적 생성
emptyArr[0] = 100;
emptyArr[1] = 'eight'
emptyArr[4] = true;

console.log(emptyArr);  // [100, undefined x 2, 'eight', undefined x 3, true]
console.log(emptyArr.length);   // 8
```

### 03. 배열의 length 프로퍼티
자바스크립트의 모든 배열은 `length 프로퍼티`가 있다. length 프로퍼티는 `배열 내에 가장 큰 인덱스에 1을 더한 값이다.`
```js
var arr = [];
console.log(arr.length);    // 0

arr[0] = 0;     // arr.length = 1
arr[1] = 1;     // arr.length = 2
arr[2] = 2;     // arr.length = 3
arr[100] = 100;
console.log(arr.length);    101
```

배열의 length 프로퍼티는 코드를 통해 명시적으로 값을 변경할 수도 있다.
```js
var arr = [0,1,2];
console.log(arr.length);    // 3

arr.length = 5;
console.log(arr);           // [0, 1, 2, undefined x 2]

arr.length = 2;
console.log(arr);           // [0, 1]
console.log(arr[2]);        //  undefined
```

#### 배열 표준 메서드와 length 프로퍼티
자바스크립트는 배열에서 사용 가능한 다양한 표준 메서드를 제공한다. 이러한 배열 메서드는 `length 프로퍼티`를 기반으로 동작하고 있다. 
```js
// push() 메서드와 length 프로퍼티

// arr 배열 생성
var arr = ['zero', 'one', 'two'];

// push() 메서드 호출
arr.push('three');
console.log(arr);   // ['zero', 'one', 'two', 'three']

// length 값 변경 후 push() 메서드 호출
arr.length = 6;
arr.push('four');
console.log(arr);   // ['zero', 'one', 'two', undefined x 2, 'four']
```

### 04. 배열과 객체
자바스크립트에서는 배열 역시 객체다. 
```js
// 배열과 객체의 유사점과 차이점

// colorsArray 배열
var colorsArray = ['orange', 'yellow', 'green'];
console.log(colorsArray[0]);     // orange
console.log(colorsArray[1]);     // yellow
console.log(colorsArray[2]);     // green

// colorsObj 객체
var colorsObj = {
    '0': 'orange',
    '1': 'yellow',
    '2': 'green'
};
console.log(colorsObj[0]);      // orange
console.log(colorsObj[1]);      // yellow
console.log(colorsObj[2]);      // green

```
- 배열과 겍체 생성 : 객체의 프로퍼티 접근을 설명할 때, 대괄호 안에는 접근하려는 프로퍼티의 속성을 `문자열 형태`로 적어야한다. 하지만  

```js
console.log(typeof colorsArray);    // object (not array)
console.log(typeof colorsObj);      // object
```
- typeof 연산자 비교 : typeof 연산 결과는 배열과 객체가 모두 `object`다. 즉, 자바스크립트도 배열을 객체라고 생각한다는 것이다.

```js
// length 프로퍼티
console.log(colorsArray.length);    // 3
console.log(colorsObj.length);      // undefined
```
- length 프로퍼티 존재 여부 : colorsObj는 객체이므로 length 프로퍼티가 존재하지 않는다. 
```js
// 배열 표준 메서드
colorsArray.push('red');    // ['orange', 'yellow', 'green', 'red']
colorsObj.push('red');      // Uncaught TypeError : Object #<Object> has no method 'push'
```
- 배열 표준 메서드 호출 여부 : 배열과 객체의 또 하나의 차이점은 colorObj는 배열이 아니므로 앞서 설명한 push()와 같은 `표준 배열 메서드`를 사용할 수 없다. 
객체 리터럴 방식으로 생성한 객체의 경우, 객체 표준 메서드를 저장하고  있는 `Object.prototype 객체`가 프로토타입이다.
반면에 배열의 경우 `Array.prototype 객체`가 부모 객체인 프로토타입이 된다. 

```js
// 배열의 프로토타입과 객체의 프로토타입 비교

var emptyArray = [];    // 배열 리터럴을 통한 빈 배열 생성
var emptyObj = {};      // 객체 리터럴을 통한 빈 객체 생성

console.log(emptyArray.__proto__);      // 배열의 프로토타입(Array.prototype) 출력
console.log(emptyObj.__proto__);        // 객체의 프로토타입(Object.prototype) 출력
```

### 05. 배열의 프로퍼티 동적 생성
배열도 자바스크립트 객체이므로, 인덱스가 숫자인 배열 원소 이외에도 객체처럼 동적으로 프로퍼티를 추가할 수 있다.
```js
// 배열 생성
var arr = ['zero', 'one', 'two'];
console.log(arr.length);            // 3

// 프로퍼티 동적 추가
arr.color = 'pink';
arr.name = 'number_array';
console.log(arr.length);            // 3

// 배열 원소 추가
arr[3] = 'red'
console.log(arr.length);            // 4

// 배열 객체 출력
console.log(arr);
```
- 배열에 동적 프로퍼티가 추가될 경우는 배열의 length 값이 3으로 바뀌지 않는다는 것이다. 다시 arr[3]에 배열 원소를 추가했을 때  length 갓이 4로 바뀌었다.
즉, `배열의 length 프로퍼티는 배열 원소의 가장 큰 인덱스가 변했을 경우만 변경된다.`

### 06. 배열의 프로퍼티 열거
배열도 객체이므로  for in 문을 사용해서 배열 내의 모든 프로퍼티를 열거할 수 있지만, 이렇게 되면 불필요한 프로퍼티가 출력될 수 있으므로 되도록 for문을 사용하는 것이 좋다.
```js
for (var prop in arr) {
    console.log(prop, arr[prop]);
}
for (var i=0; i<arr.length; i++) {
    console.log(i, arr[i]);    
}
```

### 07. 배열 요소 삭제
배열도 객체이므로, 배열 요소나 프로퍼티를 삭제하는데 delete 연산자를 사용할 수 있다.
```js
var arr = ['zero', 'one', 'two', 'three'];
delete arr[2];
console.log(arr);           //  (출력값) ['zero', 'one', undefined x 1, 'three']
console.log(arr.length);    // (출력값) 4
```

delete 연산자는 해당 요소의 값을 undefined로 설정할 뿐 원소 자체를 삭제하지는 않는다. 때문에 보통 배열에서 요소들을 완전히 삭제할 경우 자바스크립트에서는 `splice() 배열 메서드`를 사용한다.
 
```
splice() 배열 메서드

splice(start, deleteCount, item...)
- start : 배열에서 시작 위치
- deleteCount : start에서 지정한 시작 위치부터 삭제할 요소의 수
- item : 삭제할 위치에 추가할 요소

```
```js
vae arr = ['zero', 'one', 'two', 'three'];

arr.splice(2, 1);           // 2번째 요소를 시작점으로 1개의 원소를 삭제한다.
console.log(arr);           // (출력값) ['zero', 'one', 'three']
console.log(arr.length)     // (출력값) 3
```
delete 연산자와는 다르게 배열 요소를 완전히 없앤다. 따라서 배열의 요소 개수도 3개가 됐다.