const isPrime = function (num) {
  let count = 0;
  let isPrime = true;
  for (let x = num - 1; x > 1; x--) {
    // We are excluding 1 and self
    if (num % x === 0) {
      count++;
      if (count >= 1) {
        isPrime = false;
        break;
      }
    }
  }
  return isPrime || num === 1;
};

console.log(isPrime(3));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(26));
console.log(isPrime(1));
