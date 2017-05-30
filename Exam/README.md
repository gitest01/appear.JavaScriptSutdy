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
