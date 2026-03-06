// filter = 필터링
const numbers = [9, 7, 4, 999, 10];

// 10 이상의 값만 필터링!!!
// NOTE: 반환할 조건을 return에 넣는다
const filteredNumbers = numbers.findIndex(function (number, idx) {
  // console.log(number)
  return number >= 10;
});

console.log("filteredNumbers => ", filteredNumbers);
