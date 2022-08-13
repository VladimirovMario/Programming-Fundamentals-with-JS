function listMaintatenance(array) {
  let list = array.shift().split(`, `);

  let blackListed = 0;
  let lostNames = 0;
  while (array[0] != "Report") {
    let tokens = array.shift().split(` `);
    let command = tokens[0];

    if (command == "Blacklist") {
      let name = tokens[1];
      let placeInList = list.indexOf(name);

      if (placeInList != -1) {
        blackListed++;
        console.log(`${name} was blacklisted.`);
        list.splice(placeInList, 1, "Blacklisted");
      } else {
        console.log(`${name} was not found.`);
      }
    }
    if (command == "Error") {
      let index = +tokens[1];
      if (index >= 0 && index < list.length) {
        if (list[index] != "Blacklisted" && list[index] != "Lost") {
          lostNames++;
          console.log(`${list[index]} was lost due to an error.`);
          list.splice(index, 1, "Lost");
        }
      }
    }
    if (command == "Change") {
      let index = +tokens[1];
      let newUserName = tokens[2];
      if (index >= 0 && index < list.length) {
        console.log(`${list[index]} changed his username to ${newUserName}.`);
        list.splice(index, 1, newUserName);
      }
    }
  }

  console.log(`Blacklisted names: ${blackListed}`);
  console.log(`Lost names: ${lostNames}`);
  console.log(list.join(` `));
}
listMaintatenance(["Mike, John, Eddie", "Blacklist Mike", "Error 0", "Report"]);

console.log(`---`);

listMaintatenance([
  "Mike, John, Eddie, William",
  "Error 3",
  "Error 3",
  "Change 0 Mike123",
  "Report",
]);

console.log(`---`);

listMaintatenance([
  "Mike, John, Eddie, William",
  "Blacklist Maya",
  "Error 1",
  "Change 4 George",
  "Report",
]);
