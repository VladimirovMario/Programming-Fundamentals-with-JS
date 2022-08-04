function counterStrike(array) {
  let energy = array.shift();
  let initialEnergy = Number(energy);

  let index = 0;
  let command = array[index++];
  let count = 0;
  while (command !== "End of battle") {
    let currentDistance = Number(command);

    if (initialEnergy < currentDistance) {
      console.log(
        `Not enough energy! Game ends with ${count} won battles and ${initialEnergy} energy`
      );
      return;
    }
    count++;
    initialEnergy -= currentDistance;

    if (count % 3 === 0) {
      initialEnergy += count;
    }

    command = array[index++];
  }

  console.log(`Won battles: ${count}. Energy left: ${initialEnergy}`);
}
counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);
