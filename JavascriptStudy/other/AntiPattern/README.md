### 1. Loop문
```js
for (var i=; i < array.length; i++) {

}

// 수정 
var len = array.length; 
for (i=0; i < len; i+=1) {

}
```

### Select
```js
var test = document.getElementById("test")
 
var doc = document;
var test = doc.getElementById("test")
```

### DOM 생성 
가상 생성 documentFragment 를 사용하자
```js
var div = $('<div></div>').appendTo('body');
for( var i=1; i<=1000; i++ ){
    $('A'+i+'').appendTo(div);
}

var div = $('<div></div>');
for( var i=1; i<=1000; i++ ){
    $('A'+i+'').appendTo(div);
}
div.appendTo('body');
```

### For in
- for in(array) 의 경우 IE8 에서 제대로 동작이 안할 수 도있다. (Object의 경우 ok)
- 이 코드에서 index에 할당되는 값들은 "0", "1", "2"과 같은 문자열입니다. 숫자가 아닙니다. 분명 당신이 바라는 것은 문자열 연산 ("2" + 1 == "21")이 아닐 것이기 때문에, 이것은 아무리 봐도 불편한 방법입니다.
- 루프 구문이 배열 요소들만을 순회하지 않습니다. 대신 누군가에 의해 추가된 확장속성(expando)들도 순회합니다. 예를 들어, 당신이 다루는 배열이 myArray.name이라는 속성을 가지고 있다면, 이 루프는 배열 요소들 말고도 index == "name" 속성을 대상으로 한번 더 실행될 것입니다. 뿐만 아니라 배열의 프로토타입 체인(prototype chain)도 순회할 것입니다.
- 가장 당혹스러운 것은, 어떤 환경에서는 이 루프의 순회 순서가 무작위라는 점입니다.
```js
for (var index in myArray) {    // 실제 상황에서는 사용하지 마세요
  console.log(myArray[index]);
}
```

### indexOf
```js
var isExist =false;
for( var i = 0; max = array.length; i += 1 ) {
 if( array[i] === "특정값" ){
   isExist = true;
 }
}

var isExist = (array.indexOf(“특정값”)!== -1 )
```

### filter
```js
var arr = [    
  {"name":"apple", "count": 2},    
  {"name":"orange", "count": 5},    
  {"name":"pear", "count": 3},    
  {"name":"orange", "count": 16}
];    
var newArr = arr.filter(function(item){    
  return item.name === "orange";
});  
console.log("Filter results:",newArr);
```

### forEach
for 로 풀어서 쓰는데  1ms 도 차이 안나니 그냥 forEach를 쓰라고합니다..
```js
var array = [1,2,3,4,5];
array.forEach( function( v, i ){
  if( v === 3 ){
    console.log( v + ":" + i); // 3:2 가 나온다.
  }
});
```
### map
map이 forEach 보다 더 성능이 빠르다고합니다.
```js
var a = [1,2,3,4,5];
var b = a.forEach( function(v, i){ console.log(v); return v+1;}});
var c = a.map( function(v, i){ console.log(v); return v+1;});
```

### reduce
누적자
```js
array.reduce(f,n)
var a= [1,2,3,4,5] //f는 함수 n은 두번째 인자 라고 가정
n이 없을경우 array.reduce(f);를 살펴 보자 
f의 
(0) iteration 
- 첫번째 인자 : 1
- 두번째 인자 : 2
(1) iteration
- 첫번째 인자 : 1,2
- 두번째 인자 : 3
(2) iteration
- 첫번째 인자 : 1,2,3
- 두번째 인자 : 4
(3) iteration
- 첫번째 인자 : 1,2,3,4
- 두번째 인자 : 5
로 나오게 된다.
```

### 참고 : https://github.com/nhnent/fe.javascript/wiki/%EC%95%88%ED%8B%B0-%ED%8C%A8%ED%84%B4