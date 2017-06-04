/**
 * Created by gilbert on 2017. 5. 31..
예제1)
라이언은 카카오중학교 학생이다.    
라이언의 중간고사 성적표를 출력하라

예) 국어 100점 A등급 / 총점 xxx점 

`과목 점수와 등급이 나와야한다 점수는 마음대로. 100점 A,90이상 B,80이상 C,나머지 D  // 과목: 국수사과`
 */

// 점수 국 수 사 과
var result = [90,70,100,50];

// 점수계산해주는 함수
function calc(score){
  console.log(score); // 점수	
  // Math.floor 9.6 => 9 버림 
  // 변수 선언해서 case를 만드세요
	
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
