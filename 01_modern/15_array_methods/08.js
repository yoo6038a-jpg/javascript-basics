const numbers = [5, 2, 8, 1, 9, 3];

const max = numbers.reduce((max, num) => (num > max ? num : max));
console.log(max); // 9

const min = numbers.reduce((min, num) => (num < min ? num : min));
console.log(min); // 1
