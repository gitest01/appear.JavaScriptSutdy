/**
 * Created by gilbert on 2017. 6. 5..
 */
// 1. 빈 사람 객체를 하나 만든다.
// 2. 객체에 name,age 속성을 추가한다.
// 3. 객체에 getName이라는 메서드를 만든다. getName은 자기 자신의 이름을 console에 찍어준다.
// 4. name 속성의 값을 변경한다.
// 5. 다시 getName을 이용해서 name 속성의 값을 찍어본다.
// 6. name속성을 삭제한다.
// 7. 조건문을 사용해서 name속성이 없다면 다시 name 속성을 추가해준다.
// 8. 최종 Object를 탐색하여 console에 찍는다.

var Person = {};
Person.name = 'gilbert';
Person.age = 25;
Person.getName = function(){
  return console.log(this.name);
};
Person.setName = function(name){
  this.name = name;
};
function objectDesc(obj){
  for(key in obj){
    console.log('key:'+key,'value :'+obj[key])
  }
}
objectDesc(Person);
Person.getName();
delete Person.name;
Person.name == undefined ? Person.name = 'gilbert' : Person.getName();
console.log(Person);
