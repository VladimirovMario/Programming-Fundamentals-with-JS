function hogwarts(array) {
  let spell = array.shift();

  while (array[0] !== "Abracadabra") {
    let tokens = array.shift().split(` `);
    let command = tokens[0];

    if (command == "Abjuration") {
      spell = spell.toUpperCase();

      console.log(spell);
    } else if (command == "Necromancy") {
      spell = spell.toLowerCase();

      console.log(spell);
    } else if (command == "Illusion") {
      let index = +tokens[1];
      let letter = tokens[2];
      if (index >= 0 && index < spell.length) {
        let splitSpell = spell.split(``);
        let spliced = splitSpell.splice(index, 1, letter);
        spell = splitSpell.join(``);

        console.log("Done!");
      } else {
        console.log("The spell was too weak");
      }
    } else if (command == "Divination") {
      let firstSubs = tokens[1];
      let secondSubs = tokens[2];
      if (spell.includes(firstSubs)) {
        spell = spell.split(firstSubs);
        spell = spell.join(secondSubs);

        console.log(spell);
      }
    } else if (command == "Alteration") {
      let substring = tokens[1];
      if (spell.includes(substring)) {
        spell = spell.replace(substring, ``);

        console.log(spell);
      }
    } else {
      console.log("The spell did not work!");
    }
  }
}
hogwarts([
  "A7ci0",
  "Illusion 1 c",
  "Illusion 4 o",
  "Abjuration",
  "Abracadabra",
]);
console.log(`---`);
hogwarts([
  "TR1GG3R",
  "Necromancy",
  "Illusion 8 m",
  "Illusion 9 n",
  "Abracadabra",
]);
console.log(`---`);
hogwarts([
  "SwordMaster",
  "Target Target Target",
  "Abjuration",
  "Necromancy",
  "Alteration master",
  "Abracadabra",
]);
