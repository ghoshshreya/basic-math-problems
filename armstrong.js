var isArmstrong = function (num) {
  let numArr = num.toString().split('');
  let len = numArr.length;
  let sum = 0;
  for (let x of numArr) {
    sum = sum + Math.pow(Number(x), len);
  }
  return sum === num;
};

console.log(isArmstrong(153));
console.log(isArmstrong(170));
