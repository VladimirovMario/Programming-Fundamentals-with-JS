//https://en.wikipedia.org/wiki/Factorial
//https://en.wikipedia.org/wiki/Recursion_(computer_science)
function factorialDivision(num, divisor) {
  function isFactorial(num) {
    fact = 1;
    while (num > 1) {
      fact *= num;
      num--;
    }
    return fact;
  }
  let finalResult = (isFactorial(num) / isFactorial(divisor)).toFixed(2);

  console.log(finalResult);
}

factorialDivision(5, 2);
factorialDivision(6, 2);
