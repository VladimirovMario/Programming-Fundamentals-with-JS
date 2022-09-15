function pirates(array) {
  let command = array.shift();
  let cities = {};
  while (command !== "Sail") {
    let [town, people, gold] = command.split("||");
    people = Number(people);
    gold = Number(gold);
    if (cities.hasOwnProperty(town) == false) {
      cities[town] = { people: 0, gold: 0 };
    }
    cities[town].people += people;
    cities[town].gold += gold;
    command = array.shift();
  }
  // console.log(cities)
  while (array[0] !== "End") {
    let tokens = array.shift().split(`=>`);
    let currCommand = tokens[0];
    let town = tokens[1];

    if (currCommand == `Plunder`) {
      let people = Number(tokens[2]);
      let gold = Number(tokens[3]);
      cities[town].people -= people;
      cities[town].gold -= gold;
      console.log(
        `${town} plundered! ${gold} gold stolen, ${people} citizens killed.`
      );
      if (cities[town].people == 0 || cities[town].gold == 0) {
        console.log(`${town} has been wiped off the map!`);
        delete cities[town];
      }
    } else if (currCommand == `Prosper`) {
      let addedGold = Number(tokens[2]);
      if (addedGold < 0) {
        console.log("Gold added cannot be a negative number!");
      } else {
        let totalGold = (cities[town].gold += addedGold);
        console.log(
          `${addedGold} gold added to the city treasury. ${town} now has ${totalGold} gold.`
        );
      }
    }
  }
  let count = 0;
  for (let key in cities) {
    count++;
  }
  if (count > 0) {
    console.log(
      `Ahoy, Captain! There are ${count} wealthy settlements to go to:`
    );
    for (let currTown in cities) {
      console.log(
        `${currTown} -> Population: ${cities[currTown].people} citizens, Gold: ${cities[currTown].gold} kg`
      );
    }
  } else {
    console.log(
      `Ahoy, Captain! All targets have been plundered and destroyed!`
    );
  }
}

pirates([
  "Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End",
]);
console.log(`---`);
pirates([
  "Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Port Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End",
]);
