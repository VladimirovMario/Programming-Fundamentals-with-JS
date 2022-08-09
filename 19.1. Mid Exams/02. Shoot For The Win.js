function shootForTheWin(array) {
  let targets = array.shift().split(` `).map(Number);
  let index = 0;
  let command = array[index++];
  let countShots = 0;
  let lastTarget = 0;

  while (command !== "End") {
    let currentShot = Number(command);

    if (currentShot >= 0 && currentShot < targets.length) {
      lastTarget = Number(targets[currentShot]);
      countShots++;

      for (let i = 0; i < targets.length; i++) {
          
        targets[currentShot] = -1;

        if (targets[i] !== -1) {
          if (targets[i] > lastTarget) {
            targets[i] -= lastTarget;
          } else if (targets[i] <= lastTarget) {
            targets[i] += lastTarget;
          }
        }
      }
    }
    command = array[index++];
  }
  console.log(`Shot targets: ${countShots} -> ${targets.join(` `)}`);
}
shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
shootForTheWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);
