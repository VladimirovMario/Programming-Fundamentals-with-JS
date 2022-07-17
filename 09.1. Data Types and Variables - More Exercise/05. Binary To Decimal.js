function binaryToDecimal(string) {
  let decimal = +0;
  let bits = +1;
  for (let i = 0; i < string.length; i++) {
    let currNum = +string[string.length - i - 1];
    if (currNum === 1) {
      decimal += bits;
    }
    bits *= 2;
  }
  console.log(decimal);
}
binaryToDecimal(`00001001`);
binaryToDecimal(`11110000`);

// function binaryToDecimal(binary) {
//   const digit = parseInt(binary);
//   console.log(digit);
// }
// binaryToDecimal(`00001001`);
// binaryToDecimal(`11110000`);

// const digit = parseInt(binary, 2);
// parseInt(string, radix);

//string
//The value to parse. If this argument is not a string, then it is converted to one using the ToString abstract operation.
//Leading whitespace in this argument is ignored.
//
//radix_ Optional_
//An integer between 2 and 36 that represents the radix (the base in mathematical numeral systems) of the string.
// Be careful—this does not default to 10! If the radix value is not of the Number type it will be coerced to a Number.
