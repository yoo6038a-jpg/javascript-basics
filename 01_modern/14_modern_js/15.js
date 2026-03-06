// 템플릿 리터럴
// 기존 방식
const name = "홍길동";
const message1 = "안녕하세요, " + name + "님!";

// 템플릿 리터럴
const message2 = `안녕하세요, ${name}님!`;

console.log(message1); // 안녕하세요, 홍길동님!
console.log(message2); // 안녕하세요, 홍길동님!
