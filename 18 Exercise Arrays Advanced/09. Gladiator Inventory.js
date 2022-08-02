function gladiatorInventory(array) {
  let inventory = array.shift().split(` `);

  for (let index = 0; index < array.length; index++) {
    let tokens = array[index].split(` `);
    let currentCommand = tokens[0];
    let nextEquipment = tokens[1];
    let checkInventory = inventory.indexOf(nextEquipment);

    if (currentCommand === "Buy") {
      if (checkInventory === -1) {
        inventory.push(nextEquipment);
      }
    } else if (currentCommand === "Trash") {
      if (checkInventory !== -1) {
        inventory.splice(checkInventory, 1);
      }
    } else if (currentCommand === "Repair") {
      if (checkInventory !== -1) {
        let repaired = inventory.splice(checkInventory, 1);
        inventory.push(repaired.toString());
      }
    } else if (currentCommand === "Upgrade") {
      let upgrade = nextEquipment.split(`-`);
      let equipmentUpgrade = upgrade[0];
      let currentUpgrade = upgrade[1];
      let checkUpgrade = inventory.indexOf(equipmentUpgrade);

      if (checkUpgrade !== -1) {
        let set = `${equipmentUpgrade}:${currentUpgrade}`;
        inventory.splice(checkUpgrade + 1, 0, set);
      }
    }
  }
  console.log(inventory.join(` `));
}
gladiatorInventory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);
gladiatorInventory([
  "SWORD Shield Spear",
  "Trash Bow",
  "Repair Shield",
  "Upgrade Helmet-V",
]);
