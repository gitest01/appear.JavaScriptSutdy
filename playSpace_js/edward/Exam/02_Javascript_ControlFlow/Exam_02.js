/**
 * Created by gilbert on 2017. 5. 31..

예제2)
라이언은 1~100 사이의 숫자중 짝수들의 숫자만 더하는 프로그램을 만들고싶다.
1 ~ 100 사이의 수들중 짝수만 골라내어 합산하는 프로그램을 만들어보자.
 */
var star = '';
var num = 5;
// for(var i = 0; i <= num; i++){
//     star += '*'+' '+' '
//     console.log(star);
//
// }

for(var i = 0; i <= num; i++){
    for(var j = 5; j > i; j--){
        star += '*'

    }
    console.log(star);
}