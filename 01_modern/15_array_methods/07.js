// reduce

// numbers.forEach(함수);
// numbers.filter(함수);
// numbers.map(함수);
// ---------
// numbers.reduce(함수, 초기값);

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, cur) => acc * cur, 1);

console.log(sum);
