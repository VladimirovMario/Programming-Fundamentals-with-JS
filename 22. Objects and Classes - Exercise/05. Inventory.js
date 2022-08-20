function inventory(array) {
    let heroes = [];
    for (let iterator of array) {
      let [names, level, items] = iterator.split(` / `);
      let hero = {
        names,
        level: Number(level),
        items,
      };
      heroes.push(hero);
    }
    // console.log(heroes);
    heroes
      .sort((a, b) => a.level - b.level)
      .forEach((hero) => {
        console.log(`Hero: ${hero.names}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
      });
  }
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
console.log(`----`);
inventory([
  "Batman / 2 / Banana, Gun",
  "Superman / 18 / Sword",
  "Poppy / 28 / Sentinel, Antara",
]);
