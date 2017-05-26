## JavaScript Introduction
### 특징
- HTML, CSS와 함께 웹을 구성하는 요소중 하나로 웹브라우저에서 동작하는 유일한 언어이다. 컴파일X
- 멀티-패러다임 언어로 명령형 (imperative), 함수형 (functional), 프로토타입 기반 (prototype-based) 객체지향형 언어다
- Javascript는 C-family languag로 C, Java에서 많은 문법을 차용했으며 Awk, Perl, Python으로부터도 영향을 받았고, Interpreter language이기 때문에 compile이 필요없어 HTML파일 안에 직접 기술이 가능하다.
- 구글의 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임 환경(Runtime Environment)인 Node.js의 등장으로 JavaScript는 웹 브라우저를 벗어나 서버 사이드 어플리케이션 개발에서도 사용되는 Full stack 개발 언어가 되었다. 

### 동작원리
대부분의 프로그래밍 언어는 `운영체제` 위에서 실행된다. 
그와는 다르게 Javascript는 `브라우저` 틀안에서 HTML, CSS와 함께 실행된다. 
운영체제위에서 코딩하는 것보다는 훨신 효율적 프로그래밍이 가능하다.
브라우저의 주요 기능은 웹페이지를 서버에 요청하고 응답을 받아 브라우저에 표시하는것이다.
브라우저는 서버로부터 html, css, javascript 파일을 응답받는다. 
html, css 파일은 렌더링 엔진의 `HTML파서`와 `CSS파서`에 의해 파싱되어 DOM, CSSOM 트리로 변환되고 렌더 트리로 결합
HTML 파서는 script 태그를 만나면 DOM생성 프로세스를 중지하고 자바스크립트 엔진에 제어권한을 넘긴다. 
`자바스크립트의 위치`에따라 DOM 생성이 지연될 수 있음에 주의

### 관련링크 
- 브라우저동작원리 : http://d2.naver.com/helloworld/59361
- WebKit 구동원리 : http://rtcc.hanyang.ac.kr/sitedata/2015_2_ISP/howbrowserswork_20150915.pdf

### 기초문법
#### 자료형
#### 기본 자료형 (Primitive values)
오브젝트를 제외한 변경 불가능한값 (immutable value)
- Boolean : true 와 false 의 두 가지 값을 가질 수 있다.
- Null : Null 타입은 딱 한 가지 값, null 을 가질 수 있다.
- Undefined : 값을 할당하지 않은 변수는 undefined 값을 가진다. 
- Number
- String
- Symbol (ECMAScript 6에 추가) : Symbol은 유일하고 변경 불가능한 (immutable) 기본값 (primitive value) 이다


Javascript는 변수의 타입을 미리 선언할 필요가 없다. 타입은 프로그램이 처리되는 과정에서 자동으로 파악될 것이다
```js
var foo = 42;    // foo 는 이제 Number 
var foo = "bar"; // foo 는 이제 String 
var foo = true;  // foo 는 이제 Boolean 

ex) Java
public string name = "go";
private int age = 25;
```

#### 변수(Variable)
