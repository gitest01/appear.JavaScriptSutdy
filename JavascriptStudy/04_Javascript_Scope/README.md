# Scope

## 전역 변수와 지역 변수
```js
var name = 'globalName'; // 전역변수

function getName(){
  var name = 'localName'; // 지역변수
  console.log(name); // localName
}

console.log(name); // globalName
```
## 스코프(Scope)
지역변수는 아무리 해도 전역변수에 영향을 끼칠 수 없습니다. 범위라는 말처럼 함수 안에서 선언된 변수는 해당 함수 안에서만 사용할 수 있습니다     
자바스크립트는 변수의 범위를 호출한 함수의 지역 스코프부터 전역 변수들이 있는 전역 스코프까지 점차 넓혀가며 찾아갑니다.
```js
var name = 'globalName'; // 전역변수

function getName(){
  name = 'localName';
  console.log(name); // localName
}

console.log(name); // localName
```

## 스코프 체인
내부 함수에서는 외부 함수의 변수에 접근 가능하지만 외부 함수에서는 내부 함수의 변수에 접근할 수 없습니다. 꼬리를 물고 계속 범위를 넓히면서 찾는 관계를 스코프 체인이라고 부릅니다.
```js
var name = 'global';

function outer() {
  console.log('외부', name); // global
  function inner() {
    var localName = 'local';
    console.log('내부', name); // global
  }
  inner();
}
outer();
console.log(localName); // undefined
```

## 렉시컬 스코핑(lexical scoping)
스코프는 함수를 호출할 때가 아니라 선언할 때 생깁니다.
```js
var name = 'global';
function log() {
  console.log(name);
}

function wrapper() {
  var name = 'local';
  log();
}
wrapper();
```
함수를 처음 선언하는 순간, 함수 내부의 변수는 자기 스코프로부터 가장 가까운 곳에 있는 변수를 계속 참조합니다.

## 전역변수를 피하는법
전역변수를 만드는 일은 지양하라고 했는데, 그 이유는 변수가 섞일 수 있기 때문입니다.
간단한 해결 방법은 전역 변수 대신 한 번 함수 안에 넣어 지역변수로 만드는 겁니다. 아니면 객체 안의 속성으로 만들 수도 있습니다
```js
var obj = { // 네임스페이스
  x: 'local',
  y: function() {
    alert(this.x);
  }
}
```
위 방법의 단점은 누군가 고의적으로 x와 y를 바꿀 수 있습니다. 

```js
var another = function () {
  var x = 'local';
  function y() {
    alert(x);
  }
  return { y: y };
}
var newScope = another();

// 즉시실행
var newScope = (function () { //  모듈 패턴이라고도 하는데, 함수를 선언하자마자 바로 실행시켜버리는 거죠.
  var x = 'local';
  return {
    y: function() {
      alert(x);
    }
  };
})();
// 공개 변수가 없는 자바스크립트에 비공개 변수 기능을 만들어주기 때문이죠. 이 패턴은 꼭 기억하고 있어야합니다!
```

## 실행 컨텍스트
- 먼저 전역 컨텍스트 하나 생성 후, 함수 호출 시마다 컨텍스트가 생깁니다.
- 컨텍스트 생성 시 컨텍스트 안에 변수객체(arguments, variable), scope chain, this가 생성됩니다.
- 컨텍스트 생성 후 함수가 실행되는데, 사용되는 변수들은 변수 객체 안에서 값을 찾고, 없다면 스코프 체인을 따라 올라가며 찾습니다.
- 함수 실행이 마무리되면 해당 컨텍스트는 사라집니다.(클로저 제외) 페이지가 종료되면 전역 컨텍스트가 사라집니다.

