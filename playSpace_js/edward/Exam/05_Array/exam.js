// 고양이 생성자 함수

// 고양이 샵 모듈 ( 그냥 배열로 해도 무방 )  그냥 배열로 처리해도 무방
// 고양이 등록
// 등록된 고양이 출력
// 고양이 검색 (없으면 -1 리턴) indexof를 사용해도되나 반복자 함수를 사용한다면 안사용해도될거같은데 indexof는 …? 자유
// 고양이 삭제 (해당 번째의 고양이를 삭제)
// 고양이 이름 수정

var Cat = function(name){
    this.name = name;
}


var CatShop = (function() {
    var catArr = [];


    var addCat = function(catName){
        catArr.push(catName.name);

    }

    var viewCatArr = function(){
        catArr.slice();
        console.log(catArr);
    }

    var modifyCatName = function(name, newName){
        var catlen = catArr.length;
        for(var i = 0; i < catlen; i+=1){
            if(catArr[i] === name){
                catArr[i] = newName;
            }
        }

        viewCatArr();
    }

    var searchCat = function(catName){
        catArr.indexOf(catName);

    }
    var outCat = function(name){
        
    }



    return{
        add : addCat,
        view : viewCatArr,
        search : searchCat,
        rename : modifyCatName,
        out : outCat
    }

})();




CatShop.add(new Cat('이떙큐'));
CatShop.add(new Cat('야옹이'));
CatShop.add(new Cat('이쁜이'));

console.log('등록된 고양이목록');
CatShop.view();
console.log('야옹이의 이름을 새로운빵야로 바꿀꺼야');
CatShop.rename('야옹이', '옹옹이');
console.log('야옹이는 어디에있을까 ? 없으면 -1이 리턴되겠지?');
CatShop.search('야옹이');