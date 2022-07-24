function magicMatrices(matrix) {
  let checker = [];

  // logic for rows

  for (let row = 0; row < matrix.length; row++) {
    let currRow = matrix[row];

    let sumEvenRow = 0;
    let sumOddRow = 0;

    if (row % 2 == 0) {
      for (const currDigit of currRow) {
        sumEvenRow += currDigit;
      }
      checker.push(sumEvenRow);
    }

    if (row % 2 != 0) {
      for (const currDigit of currRow) {
        sumOddRow += currDigit;
      }
      checker.push(sumOddRow);
    }
  }

  // logic for columns

  for (let column = 0; column < matrix.length; column++) {
    let currColumnSum = 0;

    for (let row = 0; row < matrix.length; row++) {
      if (row % 2 == 0) {
        currColumnSum += matrix[row][column];
      }
      if (row % 2 != 0) {
        currColumnSum += matrix[row][column];
      }
    }
    checker.push(currColumnSum);
  }

  // checking if every sum is equal

  let isMagic = true;
  for (let currSum = 0; currSum < checker.length - 1; currSum++) {
    if (checker[currSum] !== checker[currSum + 1]) {
      isMagic = false;
    }
  }

  if (isMagic) {
    return true;
  } else {
    return false;
  }
}

console.log(
  magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
  ])
);

console.log(
  magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
  ])
);

console.log(
  magicMatrices([
    [2, 1, 1, 1],
    [1, 2, 1, 1],
    [1, 1, 2, 1],
    [1, 1, 1, 2],
  ])
);
