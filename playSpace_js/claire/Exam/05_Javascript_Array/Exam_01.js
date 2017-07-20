/**
 * Created by claire on 2017. 7. 1..
 */

// 고양이 샵 모듈 ( 그냥 배열로 해도 무방 )  그냥 배열로 처리해도 무방
// 고양이 등록
// 등록된 고양이 출력
// 고양이 검색 (없으면 -1 리턴) indexof를 사용해도되나 반복자 함수를 사용한다면 안사용해도될거같은데 indexof는 …? 자유
// 고양이 삭제 (해당 번째의 고양이를 삭제)
// 고양이 이름 수정


var catShop = [];
var cat = {name:'mimi'};
var cat2 = {name:'dodo'};
var cat3 = {name:'coucou'};
catShop.push(cat);
catShop.push(cat2);
catShop.push(cat3);
console.log(catShop);

catShop.forEach(function(value,index){
    console.log(value);
});

catShop[0].name = 'sisi';
console.log(catShop);

// catShop.splice(0,);
// console.log(catShop);
