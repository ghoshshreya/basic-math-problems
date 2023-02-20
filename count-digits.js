var countDigits = function (num) {
  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
};

console.log(countDigits(123));
console.log(countDigits(1));
