/**
 * Created by gilbert on 2017. 5. 31..

핸드폰 생성자 함수 (기종,년도,크)
 */

function phone(phoneName,year,size){
    this.phoneName = phoneName;
    this.year = year;
    this.size = size;

}
var samsung = new phone('gallerxy',2015,320);
var naver = new phone('navy',2016,360);
var daum = new phone('kakao',2016,375);

console.log(daum);

