// forEach를 쓸 때 주의사항
// for문 : break -> 즉시 순회 종료 / continue -> 건너뜀

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((num) => {
//   if (num === 3) {
//     // break; // ❌ SyntaxError
//     return; // 현재 반복만 종료
//   }
//   console.log(num);
// });

const numbers = [1, 2, 3];

const result = numbers.forEach((num) => num * 2);
console.log(result);
