const numbers = [1, 2, 3, 4, 5];

// 2, 4, 6, 8, 10
const doubledNumbers = numbers.map((number) => number * 2);
// const doubledNumbers = numbers.map(function (number, idx) {
//   return number * 2;
// });

// 원래의 배열을, 요소 하나하나씩 동일한 조건으로 가공해서, 새로운 배열을 만들어내는 기능
console.log(doubledNumbers);
