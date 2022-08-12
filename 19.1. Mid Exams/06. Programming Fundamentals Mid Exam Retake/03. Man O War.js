function manOWar(array) {
  let pirateShip = array.shift().split(`>`).map(Number);
  let warShip = array.shift().split(`>`).map(Number);
  let maxHealthCapacity = +array.shift();

  while (array[0] != "Retire") {
    let tokens = array.shift().split(` `);
    let command = tokens[0];

    if (command == "Fire") {
      let index = +tokens[1];
      let damage = +tokens[2];

      if (index >= 0 && index < warShip.length) {
        warShip[index] -= damage;
        if (warShip[index] <= 0) {
          console.log("You won! The enemy ship has sunken.");
          return;
        }
      }
    }
    if (command == "Defend") {
      let startIndex = +tokens[1];
      let endIndex = +tokens[2];
      let damage = +tokens[3];

      if (
        startIndex >= 0 &&
        startIndex <= endIndex &&
        endIndex < pirateShip.length
      ) {
        for (let section = startIndex; section <= endIndex; section++) {
          pirateShip[section] -= damage;
          if (pirateShip[section] <= 0) {
            console.log("You lost! The pirate ship has sunken.");
            return;
          }
        }
      }
    }
    if (command == "Repair") {
      let index = +tokens[1];
      let health = +tokens[2];

      if (index >= 0 && index < pirateShip.length) {
        pirateShip[index] += health;
        if (pirateShip[index] > maxHealthCapacity) {
          pirateShip[index] = maxHealthCapacity;
        }
      }
    }
    if (command == "Status") {
      let count = 0;
      for (const currSection of pirateShip) {
        if (currSection < maxHealthCapacity * 0.2) {
          count++;
        }
      }
      console.log(`${count} sections need repair.`);
    }
  }

  let pirateShipSum = 0;
  let warshipSum = 0;

  for (const currDigit of pirateShip) {
    pirateShipSum += currDigit;
  }
  console.log(`Pirate ship status: ${pirateShipSum}`);

  for (const currDigit of warShip) {
    warshipSum += currDigit;
  }
  console.log(`Warship status: ${warshipSum}`);
}

manOWar([
  "12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire",
]);

console.log(`---`);

manOWar([
  "2>3>4>5>2",
  "6>7>8>9>10>11",
  "20",
  "Status",
  "Fire 2 3",
  "Defend 0 4 11",
  "Repair 3 18",
  "Retire",
]);
