function maxNumber(arr) {
  let length = arr.length;
  let currentNum = [];
  for (let index = 0; index < length; index++) {
    if (arr[index] > arr[index + 1] || index === length - 1) {
      currentNum.push(arr[index]);
    }
  }
  for (let i = currentNum.length - 1; i >= 0; i--) {
    if (currentNum[i] > currentNum[i - 1]) {
      currentNum.shift(currentNum[i - 1]);
    }
  }
  console.log(currentNum.join(` `));
}

maxNumber([1, 4, 3, 2]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);
