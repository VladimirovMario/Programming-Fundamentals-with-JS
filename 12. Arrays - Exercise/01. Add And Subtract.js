function addAndSubtract(array) {
  let newArray = [];
  let sumOldArray = 0;
  let sumNewArray = 0;

  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];
    sumOldArray += currentNum;
    if (currentNum % 2 === 0) {
      currentNum += i;
    } else {
      currentNum -= i;
    }
    newArray.push(currentNum);
    sumNewArray += currentNum;
  }
  console.log(newArray);
  console.log(sumOldArray);
  console.log(sumNewArray);
}
addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);
