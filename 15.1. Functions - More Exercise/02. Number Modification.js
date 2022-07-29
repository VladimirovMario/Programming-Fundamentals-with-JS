function numberModification(num) {
  let array = num.toString().split(``);
  let result = [];
  let average = 0;
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    let currDigit = +array[i];

    result.push(currDigit);
    sum += currDigit;
    average = sum / result.length;
  }

  for (let j = 0; j < result.length; j++) {
    if (average < 5) {
      result.push(9);
    }
    if (average >= 5) {
      break;
    }
    sum += 9;
    average = sum / result.length;
  }

  console.log(result.join(``));
}
numberModification(101);
numberModification(5835);
