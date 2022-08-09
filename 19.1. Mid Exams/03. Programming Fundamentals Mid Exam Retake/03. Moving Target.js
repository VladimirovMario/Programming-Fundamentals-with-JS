function movingTarget(array) {
  let targets = array.shift().split(` `).map(Number);
  let index = 0;
  let command = array[index++];

  while (command !== "End") {
    let tokens = command.split(` `);
    let currentCommand = tokens[0];
    let currentIndex = Number(tokens[1]);
    let power = Number(tokens[2]);

    if (currentCommand === "Shoot") {
      if (currentIndex >= 0 && currentIndex < targets.length) {
        targets[currentIndex] -= power;
        if (targets[currentIndex] <= 0) {
          targets.splice(currentIndex, 1);
        }
      }
    } else if (currentCommand === "Strike") {
      let start = currentIndex - power;
      let end = power * 2 + 1;
      if (start < 0 || end >= targets.length) {
        console.log("Strike missed!");
      } else {
        targets.splice(start, end);
      }
    } else if (currentCommand === "Add") {
      if (currentIndex >= 0 && currentIndex < targets.length) {
        targets.splice(currentIndex, 0, power);
      } else {
        console.log("Invalid placement!");
      }
    }

    command = array[index++];
  }
  console.log(targets.join(`|`));
}
movingTarget([
  "52 74 23 44 96 110",
  "Shoot 5 10",
  "Shoot 1 80",
  "Strike 2 1",
  "Add 22 3",
  "End",
]);

movingTarget(["1 2 3 4 5", "Strike 0 1", "End"]);
