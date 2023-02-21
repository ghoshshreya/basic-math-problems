const printDivisors = function (num) {
  console.log('Hllo');
  for (let x = num; x > 0; x++) {
    if (num % x === 0) {
      console.log(num);
    }
  }
};

console.log('Hello');
printDivisors(36);
