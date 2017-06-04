/**
 * Created by gilbert on 2017. 5. 31..
 */

// 점수 국 수 사 과
var result = [90,70,100,50];

// 점수계산해주는 함수
function calc(score){
  var s = Math.floor(score/10); // ex. 100점이면 나누기 10 --> 10 A학점
	
  switch(s) {
    case 조건:
      console.log('A학점 입니다.');
    case 조건:
      console.log('B학점 입니다.');
    case 조건:
      console.log('C학점 입니다.');
    default: 
      console.log('D학점 입니다.');
	}
  
}

// 실행
for(var i = 0; i < result.length; i++){
	calc(result[i]);
}
