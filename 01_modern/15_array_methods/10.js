// sort, reverse

// [3, 1, 10] -> [1, 2, 3] : sort
// [3, 1, 10] -> [10, 1, 3] : reverse

const fruits = ["banana", "apple", "cherry", "date"];
const copied = [...fruits];

const newFruits = copied.sort();
console.log("원본", fruits);
console.log("변경", newFruits);
