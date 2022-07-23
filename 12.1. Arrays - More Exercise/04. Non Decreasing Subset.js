function nonDecreasingSubset(array) {
  const length = array.length;
  let maxNum = Number.MIN_SAFE_INTEGER;
  let newArray = [];
  for (let i = 0; i < length; i++) {
    let currentEl = array[i];
    if (currentEl >= maxNum) {
      maxNum = currentEl;
      newArray.push(maxNum);
    }
  }
  console.log(newArray.join(` `));
}

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([1, 2, 3, 4]);
nonDecreasingSubset([20, 3, 2, 15, 6, 1]);

//The Array.filter() built-in function might help you a lot with this problem.
