function dungeonestDark(arr) {
  let rooms = arr[0].split(`|`);
  const length = rooms.length;
  let health = 100;
  let coins = 0;
  let youMadeIt = true;

  for (let index = 0; index < length; index++) {
    let room = rooms[index].split(` `);
    let itemOrMonster = room[0];
    let points = Number(room[1]);

    if (itemOrMonster === `potion`) {
      health += points;
      if (health > 100) {
        points = Math.abs(points - (health - 100));
        health = 100;
      }
      console.log(`You healed for ${points} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (itemOrMonster === `chest`) {
      coins += points;
      console.log(`You found ${points} coins.`);
    } else {
      health -= points;
      if (health <= 0) {
        console.log(`You died! Killed by ${itemOrMonster}.`);
        console.log(`Best room: ${index + 1}`);
        youMadeIt = false;
        break;
      } else {
        console.log(`You slayed ${itemOrMonster}.`);
      }
    }
  }
  if (youMadeIt) {
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
// console.log(`---`);
// dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
