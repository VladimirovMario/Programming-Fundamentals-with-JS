function addAndSubtract(firstNum, secondNum, thirdNum) {
  function addToSum(num1, num2) {
    return num1 + num2;
  }

  let sum = addToSum(firstNum, secondNum);

  function subtract(sum, thirdNum) {
    return sum - thirdNum;
  }

  let finalResult = subtract(sum, thirdNum);

  console.log(finalResult);
}
addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
