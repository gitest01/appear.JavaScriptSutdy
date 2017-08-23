# 제이쿼리 애니메이션, css 애니메이션 
비교 : https://davidwalsh.name/css-js-animation

## 왜 css 애니메이션이 jQuery 애니메이션 보다 빠른가
JavaScript와 jQuery가 부적절하게 결합되었습니다.   
자바 스크립트 애니메이션이 빠릅니다. jQuery가 속도를 늦춘다.   
왜? jQuery가 대단히 강력 함에도 불구하고 성능이 우수한 애니메이션 엔진이 될 수있는 jQuery의 디자인 목표는 결코 없었기 때문입니다.

- jQuery는 애니메이션 외에도 다양한 용도로 사용되는 코드베이스로 인해 레이아웃 스 래싱을 피할 수 없습니다 .
- jQuery의 메모리 사용은 가비지 콜렉션을 자주 트리거하여 애니메이션 을 일시적으로 정지 시킵니다.
- jQuery는 초보자를 보호 하기 위해 requestAnimationFrame (RAF) 대신 setInterval을 사용 합니다 .