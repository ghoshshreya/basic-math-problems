var gcd = function (x, y) {
  let count = Math.min(x, y);
  let GCD = 1;
  for (let i = count; i >= 0; i--) {
    if (x % i === 0 && y % i === 0) {
      GCD = i;
      break;
    }
  }
  return GCD;
};

console.log(gcd(4, 8));
console.log(gcd(3, 6));
console.log(gcd(3, 6));
