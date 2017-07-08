// 고양이 관리 
// 1 . 고양이 객체 만들기 이름 만들어주기 나이추가 상태 추가(default : 배고파요)(생성자함수로! 함수는 프로토타입으로!!)
// 2 . 이름출력
// 3 . 나이출력
// 4 . 고양이 상태가 배고프다면 출력함수실행  ( 고양이이름 + 고양이상태 ) ex. 빵야가 배고파요를 출력
//       아니면 바로실행
// 5 . 고양이 밥주기
// 6 . 다시 고양이 상태출력 (배불러여 ~)
// 7 . 고양이 산책시키기 -> 상태 배고파요 -> 밥주기

var CatFun = function(name,age){
    this.name = name;
    this.age = age;
    this.condition = false;
};



CatFun.prototype.getName = function(){
    return this.name;
};

CatFun.prototype.getAge = function(){
    return this.age;
};
CatFun.prototype.setCondition = function(condition){
    this.condition = condition;
};
CatFun.prototype.getCondition = function(){
    return this.condition ? '배불러요' : '배고파요';
};
CatFun.prototype.getEat = function(){
    return this.name + '밥먹이기';
};
CatFun.prototype.getWalk = function(){
    return this.name + '산책시키기';
};
// function catKinds(name,age,condition){
//
// }

var catOne = new CatFun('야옹이',3);
var catZzang = new CatFun('이떙큐',5);

var catname = catZzang;

console.log(catname.getName());
console.log(catname.getAge());
console.log(catname.getCondition());
console.log(catname.getEat());
catname.setCondition(true);
console.log(catname.getCondition());
console.log(catname.getWalk());
catname.setCondition(false);
console.log(catname.getCondition());


var calc = (function(){

    var fun = function(num,num2){
        return num + num2;
    };

    return {
        f : fun
    };

})();



console.log(calc.f(1,3));