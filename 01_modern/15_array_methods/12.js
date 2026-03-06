const users = [
  { name: "홍길동", age: 30 },
  { name: "김철수", age: 25 },
  { name: "이영희", age: 28 },
];

// 나이순 오름차순
const copied = [...users];
copied.sort(function (a, b) {
  return a.age - b.age;
});

console.log("copied => ", copied);
