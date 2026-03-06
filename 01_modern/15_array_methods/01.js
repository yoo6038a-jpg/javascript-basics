// forEach
// const numbers = [1, 2, 3, 4, 5];
const students = [
  { name: "홍길동", age: 20 },
  { name: "이영희", age: 21 },
  { name: "김철수", age: 22 },
];

students.forEach(function (student, idx) {
  console.log("--------");
  console.log("student => ", student);
  console.log("idx => ", idx);
});

const fruits = ["사과", "바나나", "오렌지"];

fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

const numbers = [1, 2, 3, 4, 5];
let sum = 0;

numbers.forEach((num) => {
  sum += num;
});

console.log(sum); // 15
