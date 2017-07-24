// Json Stringify  -> Json 을 String으로
var json = {
  cat : '친칠라',
  age : 999
};

var strObject = JSON.stringify(json);
console.log(strObject); // {"cat":"친칠라","age":999}
console.log(typeof strObject, strObject); // string {"cat":"친칠라","age":999}

var jsonStr = '{ "name": "Gilbert", "age": 25 }';
var jsonObject = JSON.parse(jsonStr);
console.log(typeof jsonObject, jsonObject); // object { name: 'Gilbert', age: 25 }
