const printDivisors = function (num) {
  let divisors = [];
  for (let x = 1; x <= num; x++) {
    if (num % x === 0) {
      divisors.push(x);
    }
  }
  return divisors;
};

console.log(printDivisors(17));
console.log(printDivisors(36));
