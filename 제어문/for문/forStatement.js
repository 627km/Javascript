// for 반복문 (loop statement)
/*
for (초기화부분; 조건부분; 추가동작부분) {
  동작부분
}
*/

for (let i = 1; i <= 10; i++) {  // 추가동작부분인 i++ 가 동작부분에 들어가도 문제가 없다. 또한 초기화부분에서 사용한 변수i는 로컬변수이다. 
  console.log(`${i} Hello World!`);
}

// 초기화부분을 꼭 안채우고, 변수를 글로벌변수로 해줘도 상관없다. 그러나 for문의 초기화부분 다음의 세미콜론은 꼭 작성해줘야한다. ()안에 세미콜론 두개는 필수
let x = 1;
for (; x <= 10; x++) {
  console.log(`${x} Hello World!`);
}