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
