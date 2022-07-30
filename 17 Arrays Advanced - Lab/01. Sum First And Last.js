function sumFirstAndLast(array) {
  let firstNum = Number(array.shift());
  let lastNum = Number(array.pop());
  console.log(firstNum + lastNum);
}
sumFirstAndLast(["20", "30", "40"]);
