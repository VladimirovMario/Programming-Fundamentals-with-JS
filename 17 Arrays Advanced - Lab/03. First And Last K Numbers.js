function firstAndLastKNumbers(array) {
  const kElement = array.shift();
  const firstNumbers = array.slice(0, kElement);
  const lastNumbers = array.slice(-kElement);

  console.log(firstNumbers.join(` `));
  console.log(lastNumbers.join(` `));
}
firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);
