function biggestOf3Numbers(a, b, c) {
  let arr = [a, b, c];
  let maxNum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  console.log(maxNum);
}
biggestOf3Numbers(-2, 7, 3);
biggestOf3Numbers(130, 5, 99);
biggestOf3Numbers(43, 43.2, 43.1);
biggestOf3Numbers(2, 2, 2);
