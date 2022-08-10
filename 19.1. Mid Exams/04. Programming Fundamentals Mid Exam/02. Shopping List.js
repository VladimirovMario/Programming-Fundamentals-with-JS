function shoppingList(array) {
  let groceryList = array.shift().split(`!`);
  let index = 0;
  let command = array[index++];
  while (command !== "Go Shopping!") {
    let tokens = command.split(` `);
    let currentComand = tokens[0];
    let item = tokens[1];
    let isIncludes = groceryList.indexOf(item);

    if (currentComand === "Urgent") {
      let isItemIn = groceryList.includes(item);

      if (!isItemIn) {
        groceryList.unshift(item);
      }
    } else if (currentComand === "Unnecessary") {
      if (isIncludes !== -1) {
        groceryList.splice(isIncludes, 1);
      }
    } else if (currentComand === "Correct") {
      let correct = tokens[2];
      if (isIncludes !== -1) {
        groceryList.splice(isIncludes, 1, correct);
      }
    } else if (currentComand === "Rearrange") {
      if (isIncludes !== -1) {
        let rearranged = groceryList.splice(isIncludes, 1);
        groceryList.push(rearranged);
      }
    }

    command = array[index++];
  }
  console.log(groceryList.join(", "));
}
shoppingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
