function equalSums(arr) {
  let length = arr.length;
  let notEqual = true;

  for (let index = 0; index < length; index++) {
    let leftSum = 0;
    let rightSum = 0;

    for (let i = index - 1; i >= 0; i--) {
      leftSum += arr[i];
    }

    for (let j = index + 1; j < length; j++) {
      rightSum += arr[j];
    }
    if (leftSum === rightSum) {
      console.log(index);
      notEqual = false;
    }
  }
  if (notEqual) {
    console.log(`no`);
  }
}
equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
