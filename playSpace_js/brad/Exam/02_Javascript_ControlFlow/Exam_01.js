/**
 * Created by gilbert on 2017. 5. 31..
예제1)
라이언은 카카오중학교 학생이다.    
라이언의 중간고사 성적표를 출력하라

예) 국어 100점 A등급 / 총점 xxx점 

`과목 점수와 등급이 나와야한다 점수는 마음대로. 100점 A,90이상 B,80이상 C,나머지 D  // 과목: 국수사과`
 */

// 점수 국 수 사 과
var result = []; // [90,70,100,50]

// 점수계산해주는 함수
function calc(score){
  console.log(score); // 점수	
  // Math.floor 9.6 => 9 버림 
  // 변수 선언해서 case를 만드세요
	var s = Math.floor(score);
	var rank="";

	if( 100 > s && s > 90 ){
	  rank = "A";
    } else if( 90 > s && s>80){
	  rank = "B";
    } else if( 80 > s && s > 70){
      rank = "C";
    } else {
      rank = "D";
    }

  switch(rank) {
    case 'A':
      console.log('A학점 입니다.');
    case 'B':
      console.log('B학점 입니다.');
    case 'C':
      console.log('C학점 입니다.');
    default: 
      console.log('D학점 입니다.');
	}
  
}

// 실행
for(var i = 0; i < result.length; i++){
	calc(result[i]);
}
