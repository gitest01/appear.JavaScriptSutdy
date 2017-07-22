// 고양이 관리 
// 1 . 고양이 객체 만들기 이름 만들어주기 나이추가 상태 추가(default : 배고파요)(생성자함수로! 함수는 프로토타입으로!!)
// 2 . 이름출력
// 3 . 나이출력
// 4 . 고양이 상태가 배고프다면 출력함수실행 3초후에 ( 고양이이름 + 고양이상태 ) ex. 빵야가 배고파요를 출력
//		 아니면 바로실행
// 5 . 고양이 밥주기 
// 6 . 다시 고양이 상태출력 (배불러여 ~)
// 7 . 고양이 산책시키기 -> 상태 배고파요 -> 밥주기 

var cat = function( name, age){
    this.name = name;
    this.age = age;
    this.state = '배고파';
};

cat.prototype.eat = function(){
    if(this.state == '배고파'){
        console.log(this.name + '식사중');
        this.state = '배불러';
    } else {
        console.log('배불러');
    }
};

cat.prototype.walk = function () {
    if(this.state == '배불러'){
        console.log(this.name + '산색충');
        this.state = '배고파';
    }else{

        console.log('배고파서 산책 못간다 냐옹');
    }
};