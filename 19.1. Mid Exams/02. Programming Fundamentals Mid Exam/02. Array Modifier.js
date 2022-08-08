function arrayModifier(array) {
  let arrayToModify = array.shift().split(` `).map(Number);
  let index = 0;
  let command = array[index++];

  while (command !== "end") {
    let tokens = command.split(` `);
    let currentComand = tokens[0];
    let firstIndex = Number(tokens[1]);
    let secondIndex = Number(tokens[2]);

    if (currentComand === "swap") {
      for (let index = 0; index < 2; index++) {
        let first = arrayToModify[firstIndex];
        arrayToModify[firstIndex] = arrayToModify[secondIndex];
        arrayToModify[secondIndex] = first;
        break;
      }
    } else if (currentComand === "multiply") {
      let firstEl = arrayToModify.slice(firstIndex, firstIndex + 1);
      let secondEl = arrayToModify.slice(secondIndex, secondIndex + 1);
      let thirdEl = firstEl * secondEl;
      arrayToModify.splice(firstIndex, 1, thirdEl);
    } else if (currentComand === "decrease") {
     /*Не правим нова променлива.*/ arrayToModify = arrayToModify.map((x) => x - 1); 
      //Вместо това посочваме арея и го правим да е равен на мапнатия арей.
    }

    command = array[index++];
  }
  console.log(arrayToModify.join(", "));
}
arrayModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
arrayModifier([
  "1 2 3 4",
  "swap 0 1",
  "swap 1 2",
  "swap 2 3",
  "multiply 1 2",
  "decrease",
  "end",
]);
