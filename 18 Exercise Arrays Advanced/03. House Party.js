function houseParty(array) {
  const guestsList = [];
  for (let index = 0; index < array.length; index++) {
    const list = array[index].split(` `);
    const isNameInList = guestsList.includes(list[0]);
    const searchInList = guestsList.indexOf(list[0]);
    const currentName = list[0];
    if (list[2] === "going!") {
      if (!isNameInList) {
        guestsList.push(currentName);
      } else {
        console.log(`${currentName} is already in the list!`);
      }
    } else {
      if (searchInList > 0) {
        guestsList.splice(searchInList, 1);
      } else {
        console.log(`${currentName} is not in the list!`);
      }
    }
  }
  for (const iterator of guestsList) {
    console.log(iterator);
  }
}
houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
houseParty([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);
