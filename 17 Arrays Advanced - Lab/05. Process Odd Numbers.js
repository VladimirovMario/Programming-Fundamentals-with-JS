function processOddNumbers(array) {
  return array
    .filter((_, index) => index % 2 !== 0)
    .map((x) => x * 2)
    .reverse()
    .join(` `);
}
console.log(
  processOddNumbers([10, 15, 20, 25]),
  `\n`,
  processOddNumbers([3, 0, 10, 4, 7, 3])
);

// const length = array.length;
// let newArray = [];

// for (let i = 0; i < length; i++) {
//   if (i % 2 !== 0) {
//     newArray.push(array[i] * 2);
//   }
// }
// let reversedArray = newArray.reverse();
// console.log(reversedArray.join(` `));
