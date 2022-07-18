function reverseAnArrayOfNumbers(num, input) {
  let output = [];
  for (let j = num - 1; j >= 0; j--) {
    output.push(input[j]);
  }
  console.log(output.join(` `));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);
