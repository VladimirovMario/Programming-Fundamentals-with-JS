function treasureHunt(array) {
  let loot = array.shift().split(`|`);

  while (array[0] !== "Yohoho!") {
    let tokens = array.shift().split(` `);
    let command = tokens[0];

    if (command === "Loot") {
      for (let i = 1; i < tokens.length; i++) {
        let itemToInsert = tokens[i];
        if (loot.includes(itemToInsert) == false) {
          loot.unshift(itemToInsert);
        }
      }
    }
    if (command === "Drop") {
      let index = +tokens[1];
      if (index >= 0 && index < loot.length) {
        let item = loot.splice(index, 1).join(``);
        loot.push(item);
      }
    }
    if (command === "Steal") {
      let count = +tokens[1];
      if (count > loot.length) {
        count = loot.length;
      }
      let steal = loot.splice(loot.length - count);
      console.log(steal.join(`, `));
    }
  }

  let average = 0;
  for (let currItem of loot) {
    average += currItem.length;
  }
  if (loot.length == 0) {
    console.log("Failed treasure hunt.");
  } else {
    console.log(
      `Average treasure gain: ${(average / loot.length).toFixed(
        2
      )} pirate credits.`
    );
  }
}

treasureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);
console.log(`---`);
treasureHunt(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])

