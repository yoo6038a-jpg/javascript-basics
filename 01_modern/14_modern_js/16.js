function getGreeting() {
  return "안녕하세요";
}

const message = `${getGreeting()}, 홍길동님!`;
console.log(message); // 안녕하세요, 홍길동님!

// 메서드 호출
const text = "hello";
console.log(`대문자: ${text.toUpperCase()}`);
// 대문자: HELLO

const age = 20;
const message = `당신은 ${age >= 18 ? "성인" : "미성년자"}입니다.`;
console.log(message); // 당신은 성인입니다.

const score = 85;
console.log(`점수: ${score}점 (${score >= 60 ? "합격" : "불합격"})`);
// 점수: 85점 (합격)
