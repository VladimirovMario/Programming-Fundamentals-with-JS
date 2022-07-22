function rotateArray(arr) {
  const length = arr.length;
  let rotation = Number(arr[length - 1]);
  let rotateArray = [];

  for (let j = 0; j < length - 1; j++) {
    rotateArray.push(arr[j]);
  }
  for (let k = 0; k < rotation; k++) {
    let lastElement = rotateArray.pop();
    rotateArray.unshift(lastElement);
  }
  console.log(rotateArray.join(` `));
}
rotateArray(["1", "2", "3", "4", "2"]);
rotateArray(["Banana", "Orange", "Coconut", "Apple", "15"]);
