function numbers(array) {
  let sequence = array.shift().split(` `).map(Number);

  while (array[0] != "Finish") {
    let [command, value, replacement] = array.shift().split(` `);
    value = +value;
    replacement = +replacement;

    if (command == "Add") {
      sequence.push(value);
    }
    if (command == "Remove") {
      let searchedIndex = sequence.indexOf(value);
      if (searchedIndex != -1) {
        sequence.splice(searchedIndex, 1);
      }
    }
    if (command == "Replace") {
      let index = sequence.indexOf(value);
      if (index != -1) {
        sequence.splice(index, 1, replacement);
      }
    }
    if (command == "Collapse") {
      let collapsed = [];
      for (const iterator of sequence) {
        if (iterator > value) {
          collapsed.push(iterator);
          sequence = collapsed;
        }
      }
    }
  }

  console.log(sequence.join(` `));
}
numbers(["1 4 5 19", "Add 1", "Remove 4", "Finish"]);
numbers(["1 20 -1 10", "Collapse 8", "Finish"]);
numbers(["5 9 70 -56 9 9", "Replace 9 10", "Remove 9", "Finish"]);
