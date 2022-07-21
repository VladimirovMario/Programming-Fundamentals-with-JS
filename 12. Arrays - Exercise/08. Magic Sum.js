function magicSum(arr, num) {
  const length = arr.length;

  for (let index = 0; index < length; index++) {
    let sum = 0;

    for (let j = index + 1; j < length; j++) {
      sum = arr[index] + arr[j];
      if (sum === num) {
        console.log(`${arr[index]} ${arr[j]}`);
      }
    }
  }
}
magicSum([1, 7, 6, 2, 19, 23], 8);
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
magicSum([1, 2, 3, 4, 5, 6], 6);
