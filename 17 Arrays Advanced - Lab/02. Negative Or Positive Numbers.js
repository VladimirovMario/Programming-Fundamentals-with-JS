function negativeOrPositiveNumbers(array) {
  const length = array.length;
  let newArray = [];
  for (let i = 0; i < length; i++) {
    let currentNum = Number(array[i]);
    if (currentNum >= 0) {
      newArray.push(currentNum);
    } else {
      newArray.unshift(currentNum);
    }
  }
  for (const currentDigit of newArray) {
    console.log(currentDigit);
  }
}
negativeOrPositiveNumbers(["7", "-2", "8", "9"]);
console.log(`--------`);
negativeOrPositiveNumbers(["3", "-2", "0", "-1"]);
