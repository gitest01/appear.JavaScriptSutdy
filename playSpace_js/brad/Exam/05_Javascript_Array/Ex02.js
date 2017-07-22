/**
 * Created by bangseungmin on 2017. 7. 21..
 */
var Cat = function(name){
    this.name = name;
};

var CatShop = (function(){
    var catArr = [];
    var catLen = catArr.length;

    var addCat = function (cat) {
        catArr.push(cat.name);
    };

    var viewCatArr = function(){
        console.log(catArr);
    };

    var modifyCatName = function(name, newName){
      var idx = catArr.indexOf(name);
      catArr[idx] = newName;
    };

    var searchCat = function(name){
        return catArr.indexOf(name);
    };

    var outCat = function(name){
        catArr.splice(catArr.indexOf(name), 1)
    };

    return {
        add : addCat,
        view : viewCatArr,
        rename : modifyCatName,
        search : searchCat,
        out : outCat
    }
})();

console.log('고양이 등록');
CatShop.add(new Cat('빵야1'));
CatShop.add(new Cat('빵야2'));
CatShop.add(new Cat('빵야3'));
console.log('등록된 고양이목록');
CatShop.view();
console.log('빵야1의 이름을 새로운빵야로 바꿀거야');
CatShop.rename('빵야1', '새로운 빵야');
console.log('이름이 제대로 바뀌었나');
CatShop.view();
console.log('빵야1은 어디에 있을까? 없으면 -1이 리턴되겠지');
var index = CatShop.search('빵야1');
console.log('빵야1 검색', index);
console.log('빵야2를 내보낼거야');
CatShop.out('빵야2');
CatShop.view();
