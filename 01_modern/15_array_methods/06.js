const students = [
  {
    name: "홍길동",
    age: 20,
    gender: "male",
    hobbies: ["reading", "coding", "exercise"],
  },
  {
    name: "이영희",
    age: 21,
    gender: "female",
    hobbies: ["reading", "coding", "yoga"],
  },
  { name: "김철수", age: 22, gender: "male", hobbies: ["reading"] },
];

// // TODO : 취미가 3개 이상인 사람을 모두 뽑아보세요
const students3 = students.filter((s) => s.hobbies.length >= 3);

// // TODO : {name, age, gender, hobbies} => {name, hobbyCount} 이름과 취미개수로 이루어진 새로운 배열로!
// // EX : {name: "홍길동", hobbyCount:2}
const students4 = students.map(function (s) {
  return {
    name: s.name,
    hobbyCount: s.hobbies.length,
  };
});
console.log(students4);
