//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
function arrayManipulations(array) {
  let modifiedArray = array.shift().split(` `).map(Number);
  console.log(modifiedArray);
  const length = array.length;
  for (let i = 0; i < length; i++) {
    /* Destructuring assignment !!!
    let [command, numberOrIndex, index] = array[i].split(` `);
    numberOrIndex = Number(numberOrIndex);
    index = Number(index);
    console.log(index);*/
    let splitted = array[i].split(` `);
    let command = splitted[0];
    let numberOrIndex = Number(splitted[1]);
    let index = Number(splitted[2]);

    if (command === "Add") {
      modifiedArray.push(numberOrIndex);
    } else if (command === "Remove") {
      modifiedArray = modifiedArray.filter(
        (element) => element !== numberOrIndex
      );
    } else if (command === "RemoveAt") {
      modifiedArray.splice(numberOrIndex, 1);
    } else if (command === "Insert") {
      modifiedArray.splice(index, 0, numberOrIndex);
    }
  }
  console.log(modifiedArray.join(` `));
}
arrayManipulations([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
console.log(`---`);
arrayManipulations([
  "6 12 2 65 6 42",
  "Add 8",
  "Remove 12",
  "RemoveAt 3",
  "Insert 6 2",
]);
