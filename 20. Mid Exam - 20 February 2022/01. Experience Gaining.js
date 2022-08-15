function solve(array) {
  let neededEx = array.shift();
  let countBattles = array.shift();

  let count = 0;
  let sum = 0;
  for (let index = 0; index < countBattles; index++) {
    let currentEx = array[index];
    count++;

    if (count % 3 === 0) {
      currentEx *= 1.15;
    }
    if (count % 5 === 0) {
      currentEx *= 0.9;
    }
    if (count % 15 === 0) {
      currentEx *= 1.05;
    }
    sum += currentEx;
    if (sum >= neededEx) {
      console.log(
        `Player successfully collected his needed experience for ${count} battles.`
      );
      return;
    }
  }
  let diff = neededEx - sum;
  console.log(
    `Player was not able to collect the needed experience, ${diff.toFixed(
      2
    )} more needed.`
  );
}