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

// 사용자 정의 생성자 함수
// name과 age setName getName 메서드를 가지고 있는 생성자 함수를 만든다.
// 자신의 이름을 넣고 new 연산자를 이용해서 생성자 함수 생성
// getName을 통해 이름을 console에 찍는다.
// setName을 통해 이름을 변경한 후 다시 getName을 실행

// 과일가게

//=========================================================

// 속성 추가, 삭제, 갱신

var person = {
    name : 'claire',
    age : '123',

    getName : function () {
        console.log(this.name);
    }
};
console.log(person);

person.getName();
delete person.name;
console.log(person.name);

if (person.name == undefined){ // if문 실행하기 위해서는 항상 true, 그러므로 false 앞에 ! 를 붙여 true 로 만들어 준다. '!person.name'
    person.name = 'space';
}
console.log(person);

person.getName();
person.setName = function(aa){
    person.name = aa;
};
person.setName('fjhfjh');
console.log(person);

//=========================================================

// var phone ={};
// console.log(typeof phone);

// var phone = {
//     name : 'galaxy',
//     year : '2017',
//     size : '320',
// };
// console.log(phone);

//=========================================================

// 생성자
// function phone(name, year, size) {
//     this.name = name;
//     this.year = year;
//     this.size = size;
// }
//
// var sam = new phone('galaxy', 2017, 320);
// var ip = new phone('iphone', 2018, 120);
//
// console.log(ip);

//=========================================================