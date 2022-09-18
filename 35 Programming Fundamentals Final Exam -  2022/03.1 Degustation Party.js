function degustationParty(arr) { // It's not mine!
  let guestList = {};
  let count = 0;
  while (arr[0] !== "Stop") {
    let lines = arr.shift().split("-");
    let [taste, guest, meal] = lines;

    if (taste === "Like") {
      if (!guestList.hasOwnProperty(guest)) {
        guestList[guest] = [];
      }
      if (!guestList[guest].includes(meal)) guestList[guest].push(meal);
    }

    if (taste === "Dislike") {
      if (!guestList.hasOwnProperty(guest)) {
        console.log(`${guest} is not at the party.`);
      } else {
        if (!guestList[guest].includes(meal)) {
          console.log(
            `${guest} doesn't have the ${meal} in his/her collection.`
          );
        }

        let index = guestList[guest].indexOf(meal);
        if (index > -1) {
          guestList[guest].splice(index, 1);
          count++;
          console.log(`${guest} doesn't like the ${meal}.`);
        }
      }
    }
  }
  let people = Object.entries(guestList);
  for (let [name, meal] of people) {
    console.log(`${name}: ${meal.join(", ")}`);
  }
  console.log(`Unliked meals: ${count}`);
}
degustationParty([
  "Like-Krisi-shrimps",
  "Like-Krisi-soup",
  "Like-Penelope-dessert",
  "Like-Misho-salad",
  "Stop",
]);

console.log(`---`);
degustationParty([
  "Like-Krisi-shrimps",
  "Dislike-Vili-carp",
  "Dislike-Krisi-salad",
  "Stop",
]);

console.log(`---`);
degustationParty([
  "Like-Katy-fish",
  "Like-Katy-salad",
  "Like-Katy-banana",
  "Dislike-Katy-fish",
  "Stop",
]);
