var assert = require('../../util/assert.js');

// forEach는 1.6버젼부터 추가되었다. 구형브라우저에서는 작동하지않는다는 이슈가있다.
if(!Array.prototype.forEach){ // 브라우저에서 지원이 되지않는다면
    Array.prototype.forEach = function (callback, context) {
        for(var i = 0; i < this.length; i++){
            callback.call(context || null, this[i], i , this);
        }
    }
}

//테스트
["a","b","c"].forEach(function(value , index, array){
   assert(value, (array.length - 1) + " 중 " + index + "위치해 있다.");
});





