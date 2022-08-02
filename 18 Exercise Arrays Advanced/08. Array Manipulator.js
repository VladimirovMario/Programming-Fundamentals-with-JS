function arrayManipulator(array, secondArray) {
  for (let index = 0; index < secondArray.length; index++) {
    let splitedCommands = secondArray[index].split(` `);
    let currentCommand = splitedCommands[0];
    let indexOrElement = Number(splitedCommands[1]);
    if (currentCommand === "add") {
      let elementToAdd = Number(splitedCommands[2]);
      array.splice(indexOrElement, 0, elementToAdd);
    } else if (currentCommand === "addMany") {
      for (let j = 2; j < splitedCommands.length; j++) {
        let numsToAdd = Number(splitedCommands[j]);
        array.splice(indexOrElement, 0, numsToAdd);
        indexOrElement++;
      }
    } else if (currentCommand === "contains") {
      let isContains = array.indexOf(indexOrElement);
      console.log(isContains);
    } else if (currentCommand === "remove") {
      array.splice(indexOrElement, 1);
    } else if (currentCommand === "shift") {
      for (let shifts = 0; shifts < indexOrElement; shifts++) {
        let elementToShift = array.shift();
        array.push(elementToShift);
      }
    } else if (currentCommand === "sumPairs") {
      if (array.length % 2 !== 0) {
        array.push(0);
      }
      let pairs = [];
      for (let i = 0; i < array.length - 1; i += 2) {
        let sumPairs = array[i] + array[i + 1];
        pairs.push(sumPairs);
      }
      array = pairs;
    } else if (currentCommand === "print") {
      console.log(`[ ${array.join(`, `)} ]`);
    }
  }
}
arrayManipulator(
  [1, 2, 4, 5, 6, 7],
  ["add 1 8", "contains 1", "contains 3", "print"]
); /* 0
    -1
    [ 1, 8, 2, 4, 5, 6, 7 ]*/
arrayManipulator(
  [1, 2, 3, 4, 5],
  ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
); /* -1
     [ 2, 3, 5, 9, 8, 7, 6, 5, 1 ]*/

arrayManipulator([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]); //[ 6, 6, 6 ]

arrayManipulator(
  [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
  ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]
); // [ -1, -2, -3, 6, 6, 6 ]
