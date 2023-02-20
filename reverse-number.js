var reverseNumber = function (num) {
  if (num > 9 || num < -9) {
    let isNegative = num < 0;
    let numString = num.toString();
    if (isNegative) {
      numString = numString.replace('-', '');
    }

    numString = numString.split('').reverse().join('');
    return isNegative ? Number(numString) * -1 : Number(numString);
  }
  return num;
};

console.log(reverseNumber(-123));
console.log(reverseNumber(23));
console.log(reverseNumber(1));
