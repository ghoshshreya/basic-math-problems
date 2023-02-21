var isArmstrong = function (num) {
  let numArr = num.toString().split('');
  let len = numArr.length;
  let sum = 0;
  for (let x of numArr) {
    sum = sum + Math.pow(Number(x), len);
    console.log(sum);
  }
};

isArmstrong(123);
