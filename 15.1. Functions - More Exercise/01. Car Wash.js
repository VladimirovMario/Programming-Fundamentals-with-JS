function carWash(params) {
  let value = 0;
  for (let command of params) {
    soap(command);
    water(command);
    vacuumCleaner(command);
    mud(command);
  }
  console.log(`The car is ${value.toFixed(2)}% clean.`);

  function soap(command) {
    if (command === "soap") {
      value += 10;
    }
  }

  function water(command) {
    if (command === "water") {
      value *= 1.2;
    }
  }

  function mud(command) {
    if (command === "mud") {
      value *= 0.9;
    }
  }

  function vacuumCleaner(command) {
    if (command === "vacuum cleaner") {
      value *= 1.25;
    }
  }
}

carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);

carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
