function inventory(array) {
  let journal = array.shift().split(", ");
  let index = 0;
  let command = array[index++];

  while (command !== "Craft!") {
    let tokens = command.split(` - `);
    let currCommand = tokens[0];
    let item = tokens[1];
    let isIncluded = journal.includes(item);
    let indexOfItem = journal.indexOf(item);

    if (currCommand === "Collect") {
      if (!isIncluded) {
        journal.push(item);
      }
    } else if (currCommand === "Drop") {
      if (indexOfItem !== -1) {
        journal.splice(indexOfItem, 1);
      }
    } else if (currCommand === "Combine Items") {
      let combine = item.split(`:`);
      let oldItem = combine[0];
      let newItem = combine[1];
      let combineIndex = journal.indexOf(oldItem);
      if (combineIndex !== -1) {
        journal.splice(combineIndex + 1, 0, newItem);
      }
    } else if (currCommand === "Renew") {
      if (indexOfItem !== -1) {
        let movedItem = journal.splice(indexOfItem, 1);
        let itemToPush = movedItem.toString();
        journal.push(itemToPush);
      }
    }
    command = array[index++];
  }

  console.log(journal.join(", "));
}
inventory(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);
inventory([
  "Iron, Sword",
  "Drop - Bronze",
  "Combine Items - Sword:Bow",
  "Renew - Iron",
  "Craft!",
]);
