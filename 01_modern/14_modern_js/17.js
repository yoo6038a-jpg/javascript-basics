const age = 20;
const message = `당신은 ${age >= 18 ? "성인" : "미성년자"}입니다.`;
console.log(message); // 당신은 성인입니다.

const score = 85;
console.log(`점수: ${score}점 (${score >= 60 ? "합격" : "불합격"})`);
// 점수: 85점 (합격)
