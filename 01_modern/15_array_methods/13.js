// // reverse
// const numbers = [1, 2, 3, 4, 5];

// numbers.reverse();
// console.log(numbers);

const numbers = [3, 1, 4, 1, 5, 9];

// 오름차순 정렬 후 뒤집기 = 내림차순
numbers.sort((a, b) => a - b).reverse();
console.log(numbers); // [9, 5, 4, 3, 1, 1]

// 또는 바로 내림차순
numbers.sort((a, b) => b - a);

const users = [
  { name: "홍길동", age: 30 },
  { name: "김철수", age: 25 },
  { name: "이영희", age: 28 },
];

const arr = users
  .filter(function (u) {
    // 26살 미만만
    return u.age < 26;
  })
  .map(function (u) {
    return u.name;
  });
