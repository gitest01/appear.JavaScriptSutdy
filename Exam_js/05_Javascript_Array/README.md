# Array (배열) 
### Array는 자바스크립트에서 제공하는 객체이다 미리 정의된 프로퍼티와 함수를 사용할 수 있다. 
참고 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array

## 선언법
기본 선언법 
```js
var number = [];
console.log(number.length); // length 0
```
[] 요소집합을 이용한 선언법
```js
var number = [1, 2, 3, 4, 5];
console.log(number.length); // length 5
```
Array 생성자를 통한 선언법
```js
var number = new Array();
console.log(number.length); // length 0
```
Array 생성자를 통한 선언법 2
```js
var number = new Array(1,2,3,4,5);
console.log(number.length); // length 0
```
Array 생성자를 통한 배열 길이 조절 
```js
var number = new Array(10);
console.log(number.length); // length 10
```
다른 언어들과 달리 자바스크립트 Array는 다양한 종류의 요소를 포함할 수 있다.
```js
var test = 10;
var obj = [1,'gilbert', test, null];
console.log(obj.length); // length 4
```
isArray() 를 통한 배열 타입 체크
```js
var number = 10;
var arr = [1,2,3,4];

console.log(number.isArray()); //false
console.log(arr.isArray()); //true
```
##### Array를 이용하여 선언하는것 보다는 []를 통한 선언이 훨씬 효율적이라고한다.

## 배열 다루기 
요소에 접근하여 값 다루기 
```js
var arr = [];
for(var i = 0 ; i < 100 ; i++){
    arr[i] = i+1;
}
```
인덱스로 접근하기 
```js
var arr = [1,2,3];
var sum = arr[0] +  arr[1] + arr[2];
console.log(sum); //6
```
문자열로 배열 만들기 
```js
var introduce = "안녕하세요 gilbert입니다. 일하고 있습니다.";
var word = introduce.split(" "); //공백으로 자르기
for(var i = 0 ; i < word.length; i++){
    console.log("word"+i+":"+word[i]);
}
// word0 : 안녕하세요 , word1 : gilbert입니다. , word2 : 일하고 , word3 : 있습니다.
```
배열을 다른 배열로 할당 
```js
var nums = [];
for(var i = 0 ; i < 10; i++){
    nums[i] = i+1;
}
var sameNums = nums; 
배열을 다른 배열로 할당할때 실제로는 할당된 배열의 레퍼런스를 할당하는것이다.
기존의 배열의 값을 변경하면 새로 할당된 배열의 값도 변경된다.
``` 
얕은복사 예제 
```js
var nums = [];
for(var i = 0 ; i < 10; i++){
    nums[i] = i+1;
}
var sameNums = nums; 
nums[0] = 100;
console.log(sameNums[0]); // 100
새로할당 받은 배열은 이전배열의 주소를 가리킬 뿐이다.
```
간단한 깊은복사 
```js
var copy = function(arr1 , arr2){
    for(var i = 0 ; i < arr1.length ; i++){
        arr2[i] = arr1[i];
    }
}
```

## 배열검색
indexOf 값 검색하기
```js
var names = ["gilbert", "shwan", "bread", "merin", "edwrad", "del"];
var position = names.indexOf("gilbert"); // 0  값이 있을시 해당값 위치, 없을시 -1
//indexof로 찾으려는 함수가 여러개가 있으면 첫 번째로 발견한 인자의 인덱스를 반환
``` 
lastIndexOf 값 검색하기 
```js
var eng = ["a","b","c","d","a"];
var position = eng.lastIndexOf("a"); // 4
```
join , toString 을 이용하여 배열을 문자열로 표현하기
```js
var intro = ["안녕","하세요","gilbert","입니다"];
var introStr = intro.join(); // 안녕,하세요,gilbert,입니다
var introStr2 = intro.toString(); // 안녕,하세요,gilbert,입니다
``` 
concat , splice 를 이용하여 기존의 배열을 이용해 새로운 배열 만들기
- concat : 2개 이상의 배열을 `합쳐` 새로운 배열을 만듬
- slice : 기존의 배열을 `잘라` 새로운 배열을 만든다.
```js
var first = ["A","B","C"];
var second = ["D","F","G"];
var concatArr = first.concat(second);
console.log(concatArr); //["A", "B", "C", "D", "F", "G"]

var sliceArr = concatArr.slice(3,concatArr.length);
console.log(sliceArr);  //["D", "F", "G"]
var sliceArr2 = concatArr.slice();
console.log(sliceArr2); //["A", "B", "C", "D", "F", "G"]
```
변형자함수(push,unshift..)를 이용하여 개별요소 건드리지않고 배열 전체 고치기'
```js
var nums = [1, 2, 3, 4, 5];
console.log(nums); // 1,2,3,4,5
nums.push(6);
console.log(nums); // 1,2,3,4,5,6 마지막 요소추가

nums.unshift(0);
console.log(nums); // 0,1,2,3,4,5,6
```
pop , shift롤 이용하여 배열 요소 삭제하기
```js
var nums = [1, 2, 3, 4, 5];
nums.pop();
console.log(nums); // 1,2,3,4 마지막 요소 제거 

nums.shift();
console.log(nums); // 2,3,4 맨앞 요소 제거
```
배열 중간에 요소를 추가하거나 중간에 있는 요소 제거하기 
```js
var nums = [1,2,3,7,8,9];
nums.splice(3,0,4,5,6);
console.log(nums); // [1, 2, 3, 4, 5, 6, 7, 8, 9] 요소추가 
nums.splice(3,1);
console.log(nums); // [1, 2, 3, 5, 6, 7, 8, 9] 요소삭제
```
배열 요소 정렬하기 
```js
var nums = [1,2,3,4,5];
nums.reverse();
console.log(nums) // 5,4,3,2,1 역순 
var nums2 = [1,3,200,10,300,5];
console.log(nums2.sort()); //[1, 10, 200, 3, 300, 5] sort함수는 요소를 모두 문자열로 간주한다

function compare(num1 , num2){
    return num1 - num2;
}
var nums3 = [1,3,200,10,300,5];
console.log(nums3.sort(compare)); // [1, 3, 5, 10, 200, 300] 
```
반복자 함수 forEach 
```js
function square(num){
    console.log(num , num * num);
}
var nums = [1,2,3,4,5,6,7,8];
nums.forEach(square);
```
반복자 함수 every &&연산
```js
function isEven(num){
    return num%2 === 0;
}
var nums = [1, 2, 3, 4, 5];
var even = nums.every(isEven); // not all numbers are even 모두 조건에 부합해야 true 
if(even){
    console.log('All numbers even');
}else{
    console.log('not all numbers are even');
}
```
반복자함수 some || 연산
```js
function isEven(num){
    return num % 2 === 0;
}
var nums = [1, 2, 3, 4, 5];
var someEven = nums.some(isEven);
if(someEven){
    console.log("some numbers are even");  // 실행
}else{
    console.log("no numbers are even");
}
var nums2 = [1, 3, 5, 7];
var someEven2 = nums2.some(isEven);
if(someEven2){
    console.log("some numbers are even");  
}else{
    console.log("no numbers are even"); // 실행
}
```
반복자함수 reduce
- 배열의 모든요소를 누적자함수에 적용한다.
```js
function add(num1, num2){
    return num1+num2;
}
var nums = [1, 2, 3, 4];
var sum = nums.reduce(add);
console.log(sum);
//실행과정
//add(1,2) 3
//add(3,3) 6
//add(6,4) 10

//reduce를 이용하여 문자열연결
function concat(str1, item){
    return str1 + item;
}
var words = ["A", "B", "C", "D"];
var sentence = words.reduce(concat);
console.log(sentence); //ABCD

//reduceRight reduce와 같지만 오른쪽부터 실행된다.
function concat(str1, item){
    return str1 + item
}
var words = ["A", "B", "C", "D"];
var sentence = words.reduceRight(concat); 
console.log(sentence); // DCBA
```
새 배열을 반환해주는 반복자함수 map 
- forEach 처럼 배열의 각 요소에 함수를 적용하는 함수이다.
```js
function curve(grade){
    return grade += 5;
}
var grades = [77, 65, 98, 11, 23];
var newGrades = grades.map(curve);
console.log(newGrades); // [82, 70, 103, 16, 28]
//문자열에 map을 사용
function firstStr(word){
    return word[0];
}
var words = ["Hello","My","Name","is","gilbert"];
var newWord = words.map(firstStr);
console.log(newWord.join("")); // HMNia
```
새 배열을 반환해주는 반복자함수 filter 
- every 함수와 비슷하다. filter는 조건을 만족하는 요소를 포함하는 새로운 배열을 반환한다.
```js
function isEven(num){
    return num % 2 === 0;
}
function isOdd(num){
    return num % 2 !== 0;
}
var nums = [];
for(var i = 0 ; i < 20; ++i){
    nums[i] = i;
}
var evens = nums.filter(isEven);
console.log(evens); // [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
var odd = nums.filter(isOdd);
console.log(odd); // [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
```

## TIP
깊은복사와 얕은복사
```js
var arr = [1,2,3,4,5];
var  copyArr = arr; // 얕은복사 배열 

copyArr.push(6);
// 같은 주소를 참조하고 있기때문에 원본배열에 손상을줌 
console.log('arr', arr); // [1, 2, 3, 4, 5, 6]
console.log('copyArr', copyArr); // [1, 2, 3, 4, 5, 6]

// 깊은 복사에는 정말많은 방법이있습니다. 간단히 slice를 이용해서 만들어보겠습니다. slice는 잘라낸 문자들을 토대로 원본과는 무관한 배열을 만들어줍니다. 
// 참고  https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
var deepCopyArr = arr.slice();
console.log('deepCopyArr', deepCopyArr); //  [1, 2, 3, 4, 5, 6]
deepCopyArr.push(7);
console.log('arr', arr); // [1, 2, 3, 4, 5, 6]
console.log('deepCopyArr', deepCopyArr); //  [1, 2, 3, 4, 5, 7]
```


