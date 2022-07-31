function train(train) {
  let wagons = train.shift().split(` `).map(Number);
  console.log(wagons);
  const maxCapacity = Number(train.shift());
  const length = train.length;

  for (let i = 0; i < length; i++) {
    let command = train[i].split(` `);
    let addWagonsOrPassengers = command[0];
    let wagonsWithPassengers = Number(command[1]);
    if (addWagonsOrPassengers === "Add") {
      wagons.push(wagonsWithPassengers);
    } else {
      addWagonsOrPassengers = Number(addWagonsOrPassengers);
      for (let j = 0; j < wagons.length; j++) {
        if (wagons[j] + addWagonsOrPassengers <= maxCapacity) {
          wagons[j] += addWagonsOrPassengers;
          break;
        }
      }
    }
  }
  console.log(wagons.join(` `));
}
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
