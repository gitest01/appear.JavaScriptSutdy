/**
 * Created by gilbert on 2017. 5. 31..

예제2)
 // 1. 빈 사람 객체를 하나 만든다.
 // 2. 객체에 name,age 속성을 추가한다.
 // 3. 객체에 getName이라는 메서드를 만든다. getName은 자기 자신의 이름을 console에 찍어준다.
 // 4. name 속성의 값을 변경한다.
 // 5. 다시 getName을 이용해서 name 속성의 값을 찍어본다.
 // 6. name속성을 삭제한다.
 // 7. 조건문을 사용해서 name속성이 없다면 다시 name 속성을 추가해준다.
 // 8. 최종 Object를 탐색하여 console에 찍는다.
 */


var obj = {};

obj.name = 'edward';
obj.age = 18;
obj.getName = function(){
    console.log(this.name);
    // return this.name;
}


console.log(obj);

obj.getName();

obj.name = 'space';

console.log(obj.name);

delete obj.name;
console.log(obj);
if(obj.name == undefined){
    obj.name = 'wook';
}
obj.getName();
console.log(obj);


obj.sameName = function(name){
    this.name = name;
    console.log(this.name);
}

obj.sameName('star');
console.log(obj.name);
console.log(obj);

