## Javascript Control Flow (제어문)
### 종류 
- 조건문
   - if
   - if_else
   - switch 
- 반복문
  - for
  - while
  - do_while
  - break
  - continue
### 들어가기전에
전역과 내부스코프
```js
var a = 5; // 전역변수
    
//전역과 내부 스코프       
function funcScope(){         
  console.log('이때의 a는 전역', a);     
  var b = 8;     
  console.log('이때의 b는 내부', b);
}

// 그런데 이때 전역 a를  내부 a로 선언을 해버리면 어떻게될까?
function funcScope2(){
  console.log('이때의 a는 전역', a);
  var a = 8;
  console.log('이때의 a는 내부', a);
}
funcScope();
funcScope2();
```
### 조건문
#### Boolean
비교 연산의 결과로 참(true)이나 거짓(false)을 얻을 수 있다. 숫자와 문자처럼 언어에서 제공하는 데이터 형이다. 이를 Boolean(불린)이라고한다.
프로그래밍(coding)이란 변수를 통해 값를 저장하고 참조하며 연산자로 값을 연산, 평가하고 조건문과 반복문에 의한 흐름제어로 데이터의 흐름을 제어
#### if문
```js
// 기본 포맷
if (조건식) {
  // 조건식이 참이면 이 코드블록이 실행된다.
} else {
  // 조건식이 거짓이면 이 코드블록이 실행된다.
}
// 예제
var name = "foo";
if(name){
   console.log('이름이 있어요 :', name);
}
// 한줄로 줄여 쓸 수 도있어요
if(name) console.log('이름이 있어요 :', name);
```
#### if_else
else : 조건에 부합하지 않았을때 실행
```js
var name = name || '';
if(name){
   console.log('이름이 있어요');
}else{
   console.log('이름이 없어요');
}
```

### switch 
switch 문의 경우, switch변수의 값과 일치되는 case문으로 실행 순서가 이동하게 된다. switch변수의 값과 일치되는 case문이 없다면 실행 순서는 default로 이동한다.
```js
switch(조건) {
  case 조건1:
    // 조건1 실행
  case 조건2:
    // 조건2 실행  
  case 조건3:
    // 조건3 실행
  default: // 조건에 부합하는게 없다면  
    // 디폴트 실행
}
```
### break 
조건에 부합한 로직을 실행후 탈출하는 역할을 수행     
Ex) while, switch 문에서 break문이 없다면 로직 실행후에도 끝까지 실행
```js
switch(조건) {
  case 조건1:
    // 조건1 실행
    break;
  case 조건2:
    // 조건2 실행  
    break;
  case 조건3:
    // 조건3 실행
    break;
  default: // 조건에 부합하는게 없다면  
    // 디폴트 실행
    break;
}
```
### 반복문
반복문은 주어진 조건식(conditional expression)이 참인 경우 코드 블록을 반복적으로 실행한다.
#### for
가장 일반적으로 사용되는 반복문이다. 일정 횟수만큼 반복 실행하여야 할 때 사용한다.
```js
// 기본적인 구조
for (var i = 0; i < 3; i++) {
  console.log(i);
}
```
#### while
반복 횟수를 정확히 알지 못할 때 사용한다.
```js
while (true) { // 무한루프조심
  console.log(i);
  i++;
}
```
#### do_while
While문과 매우 유사하나 코드블록은 최소 1회 이상 실행된다.
```js
var i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);
```
#### continue
continue문 이후의 구문은 실행 생략하고 반복문의 조건검사 위치로 이동한다.
```js
for (var i = 0; i < 5; i++) {
  if (i % 2 == 0) continue;
  console.log("The number is " + i );
}
```
### Evaluating
피연산자와 이항연산자로 구성된 일반적 표현식뿐만 아니라 문자열이나 숫자와 같은 리터럴 값, 변수, 내장값들(true, false, null, undefined, Nan, Infinity…)등 또한 조건식으로 사용될 수 있다.
```js
if(1) // true 
if('str') // true
if(x) // false
if(true) // true
if(null) // false
if(!x) // true
```

### TIP
#### Data type conversion
```js
var val = '123';
console.log(typeof val + ':' + val); // string

//number -> string
var val = 1;
console.log(typeof val); // number;
val += 'string';
console.log(typeof val); // string;

// number -> sting 
val += '';
// val = String(val);
console.log(typeof val + ':' + val); // string
```
#### Truthy & Falsy values
Boolean context에서 false로 평가된다.    
false    
undefined    
null    
0    
NaN (Not a Number)    
"" (빈문자열)   
#### Checking equality
두 값을 비교할 때에 동등연산자(==, !=)보다 일치연산자(===, !==)를 사용하여야 한다.
```js
var num1 = 5;
var num2 = '5';

console.log(typeof num1); // number
console.log(typeof num2); // string

console.log('==', num1 == num2); // true
console.log('===', num1 === num2); // false
```
#### Checking existence
객체나 배열(배열도 객체이다)이 값을 가지고 있으면 truthy value로 취급된다
```js
if (obj) {
  // 요소가 존재함 : 필요한 작업을 수행
} else {
  // 요소가 존재하지 않음 : 필요한 작업을 수행
}
```
#### 예제
예제1)
라이언은 카카오중학교 학생이다.    
라이언은 중간고사 시험으로 
국, 수, 사, 과를 봐야한다. 
하지만 배가아픈 나머지 사회시험을 보지못했다
라이언의 중간고사 성적표를 출력하라

예) 국어 96점 A등급 / 총점 xxx점 

`단, 1. 과목 점수와 등급이 나와야한다 점수는 마음대로. 2. 사회는 변수선언X 디폴트 값으로 0을 주어야한다.`

예제2)
라이언은 1~100 사이의 숫자중 짝수들의 숫자만 더하는 프로그램을 만들고싶다.
1 ~ 100 사이의 수들중 짝수만 골라내어 합산하는 프로그램을 만들어보자.




