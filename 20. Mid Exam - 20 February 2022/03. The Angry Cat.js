function theAngryCat(array, point, items) {
  // 54
  let entryPoint = array[point];

  let leftSum = 0;
  let rightSum = 0;

  for (let index = 0; index < point; index++) {
    if (items === "cheap") {
      if (array[index] < entryPoint) {
        leftSum += array[index];
      }
    } else if (items === "expensive") {
      if (array[index] >= entryPoint) {
        leftSum += array[index];
      }
    }
  }

  for (let j = point + 1; j < array.length; j++) {
    if (items === "cheap") {
      if (array[j] < entryPoint) {
        rightSum += array[j];
      }
    } else if (items === "expensive") {
      if (array[j] >= entryPoint) {
        rightSum += array[j];
      }
    }
  }

  if (leftSum >= rightSum) {
    console.log(`Left - ${leftSum}`);
  } else {
    console.log(`Right - ${rightSum}`);
  }
}
theAngryCat([1, 5, 1], 1, "cheap");
theAngryCat([5, 10, 12, 5, 4, 20], 3, "cheap");
theAngryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");
