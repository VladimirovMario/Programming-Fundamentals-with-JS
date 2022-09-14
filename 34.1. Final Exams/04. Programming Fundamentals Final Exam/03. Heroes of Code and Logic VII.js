//https://pastebin.com/g2tvtBNA
function heroes(party) {
  let heroesNumber = party.shift();
  let hero = {};

  for (let i = 0; i < heroesNumber; i++) {
    let currentHero = party.shift().split(` `);
    let name = currentHero[0];
    let hitPoints = +currentHero[1];
    let mana = +currentHero[2];
    hero[name] = [hitPoints, mana];
  }

  while (party[0] !== "End") {
    let [command, heroName, points, spell] = party.shift().split(" - ");
    points = +points;

    if (hero.hasOwnProperty(heroName)) {
      if (command === "CastSpell") {
        if (hero[heroName][1] >= points) {
          hero[heroName][1] -= points;
          console.log(
            `${heroName} has successfully cast ${spell} and now has ${hero[heroName][1]} MP!`
          );
        } else {
          console.log(`${heroName} does not have enough MP to cast ${spell}!`);
        }
      } else if (command === "TakeDamage") {
        hero[heroName][0] -= points;
        if (hero[heroName][0] > 0) {
          console.log(
            `${heroName} was hit for ${points} HP by ${spell} and now has ${hero[heroName][0]} HP left!`
          );
        } else {
          console.log(`${heroName} has been killed by ${spell}!`);
          delete hero[heroName];
        }
      } else if (command === "Recharge") {
        hero[heroName][1] += points;
        if (hero[heroName][1] > 200) {
          let diff = hero[heroName][1] - 200;
          console.log(`${heroName} recharged for ${points - diff} MP!`);
          hero[heroName][1] = 200;
        } else {
          console.log(`${heroName} recharged for ${points} MP!`);
        }
      } else if (command === "Heal") {
        hero[heroName][0] += points;
        if (hero[heroName][0] > 100) {
          let diff = hero[heroName][0] - 100;
          console.log(`${heroName} healed for ${points - diff} HP!`);
          hero[heroName][0] = 100;
        } else {
          console.log(`${heroName} healed for ${points} HP!`);
        }
      }
    }
  }
  for (const currHero of Object.entries(hero)) {
    console.log(currHero[0]);
    for (let i = 0; i < currHero[1].length; i++) {
      if (i == 0) {
        console.log(`  HP: ${currHero[1][i]}`);
      } else {
        console.log(`  MP: ${currHero[1][i]}`);
      }
    }
  }
}

/*heroes([
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End",
]);*/

heroes([
  "4",
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  "Tyris 94 61",
  "Heal - SirMullich - 50",
  "Recharge - Adela - 100",
  "CastSpell - Tyris - 1000 - Fireball",
  "TakeDamage - Tyris - 99 - Fireball",
  "TakeDamage - Ivor - 3 - Mosquito",
  "End",
]);
