function solve(array) {
  let rout = array.shift().split(`||`);
  let fuel = Number(array[0]);
  let ammunition = Number(array[1]);

  for (let index = 0; index < rout.length; index++) {
    let tokens = rout[index].split(` `);
    let currentCommand = tokens[0];
    let currentNum = Number(tokens[1]);

    if (currentCommand === "Travel") {
      fuel -= currentNum;
      if (fuel >= 0) {
        console.log(`The spaceship travelled ${currentNum} light-years.`);
      } else {
        console.log(`Mission failed.`);
        return;
      }
    } else if (currentCommand === "Enemy") {
      if (ammunition >= currentNum) {
        ammunition -= currentNum;
        console.log(`An enemy with ${currentNum} armour is defeated.`);
      } else {
        fuel -= currentNum * 2; //
        if (ammunition < currentNum && fuel < 0) {
          console.log(`Mission failed.`);
          return;
        } else {
          console.log(`An enemy with ${currentNum} armour is outmaneuvered.`);
        }
      }
    } else if (currentCommand === "Repair") {
      fuel += currentNum;
      ammunition += currentNum * 2;
      console.log(`Ammunitions added: ${currentNum * 2}.`);
      console.log(`Fuel added: ${currentNum}.`);
    }
    if (currentCommand === "Titan") {
      console.log("You have reached Titan, all passengers are safe.");
      return;
    }
  }
}