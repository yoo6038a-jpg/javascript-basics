const numbers = [10, 5, 40, 25, 1000, 1];
const copied = [...numbers];

copied.sort(function (a, b) {
  //   console.log(a, b);
  //   return a - b;
  return b - a;
});

console.log("copied => ", copied);
