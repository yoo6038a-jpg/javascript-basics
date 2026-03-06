const students = [
  { name: "김철수", score: 45 },
  { name: "이영희", score: 82 },
  { name: "박민준", score: 91 },
  { name: "최수진", score: 60 },
  { name: "정도현", score: 73 },
];

// 점수가 70점 이상인 학생의 이름만 배열로 담으세요.
const result = students
  .filter(function (s) {
    return s.score >= 70;
  })
  .map(function (s) {
    return s.name;
  });

console.log(result2); // ['이영희', '박민준', '정도현']
