function printNthElement(arr) {
  const length = arr.length;
  let numOfRotations = ``;
  let newArray = [];
  for (let i = 0; i < length; i++) {
    numOfRotations = Number(arr[length - 1]);
  }
  for (let j = 0; j < length - 1; j++) {
    if (j % numOfRotations === 0) {
      newArray.push(arr[j]);
    }
  }
  console.log(newArray.join(` `));
}
printNthElement(["5", "20", "31", "4", "20", "2"]);
printNthElement(["dsa", "asd", "test", "test", "2"]);
printNthElement(["1", "2", "3", "4", "5", "6"]);
