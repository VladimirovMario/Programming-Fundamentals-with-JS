function englishNameOfTheLastDigit(num) {
  let lastDigit = num % 10;
  let output = [
    `zero`,
    `one`,
    `two`,
    `three`,
    `four`,
    `five`,
    `six`,
    `seven`,
    `eight`,
    `nine`,
  ];
  console.log(output[lastDigit]);
}
englishNameOfTheLastDigit(5120);
englishNameOfTheLastDigit(1);
englishNameOfTheLastDigit(1643);
