function heroRecruitment(array) {
  let heroes = {};

  while (array[0] !== "End") {
    let [command, heroName, spellName] = array.shift().split(` `);

    if (command == "Enroll") {
      if (heroes.hasOwnProperty(heroName) == false) {
        heroes[heroName] = [];
      } else {
        console.log(`${heroName} is already enrolled.`);
      }
    }
    if (command === "Learn") {
      if (heroes.hasOwnProperty(heroName)) {
        if (heroes[heroName].includes(spellName)) {
          console.log(`${heroName} has already learnt ${spellName}.`);
        } else {
          heroes[heroName].push(spellName);
        }
      } else {
        console.log(`${heroName} doesn't exist.`);
      }
    }
    if (command === "Unlearn") {
      if (heroes.hasOwnProperty(heroName)) {
        if (heroes[heroName].includes(spellName) == false) {
          console.log(`${heroName} doesn't know ${spellName}.`);
        } else {
          let searchedIndex = heroes[heroName].indexOf(spellName);
          heroes[heroName].splice(searchedIndex, 1);
        }
      } else {
        console.log(`${heroName} doesn't exist.`);
      }
    }
  }
  console.log(`Heroes:`);
  for (let currHero in heroes) {
    console.log(`== ${currHero}: ${heroes[currHero].join(`, `)}`);
  }
}
heroRecruitment([
  "Enroll Stefan",
  "Enroll Peter",
  "Enroll Stefan",
  "Learn Stefan ItShouldWork",
  "Learn John ItShouldNotWork",
  "Unlearn George Dispel",
  "Unlearn Stefan ItShouldWork",
  "End",
]);
console.log(`---`);
heroRecruitment([
  "Enroll Stefan",
  "Learn Stefan ItShouldWork",
  "Learn Stefan ItShouldWork",
  "Unlearn Stefan NotFound",
  "End",
]);
console.log(`---`);
heroRecruitment([
  "Enroll Stefan",
  "Enroll Peter",
  "Enroll John",
  "Learn Stefan Spell",
  "Learn Peter Dispel",
  "End",
]);
