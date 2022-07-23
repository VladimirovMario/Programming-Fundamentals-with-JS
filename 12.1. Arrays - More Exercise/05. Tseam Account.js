function tseamAccount(array) {
  let account = array.shift().split(` `);

  while (array[0] != "Play!") {
    let [command, game] = array.shift().split(` `);
    let index = account.indexOf(game);

    if (command == "Install") {
      if (account.includes(game) === false) {
        account.push(game);
      }
    }
    if (command == "Uninstall") {
      if (account.includes(game)) {
        account.splice(index, 1);
      }
    }
    if (command == "Update") {
      if (index != -1) {
        let update = account.splice(index, 1).join(``);
        account.push(update);
      }
    }
    if (command == "Expansion") {
      let tokens = game.split(`-`);
      let currName = tokens[0];
      let expansion = game.split(`-`).join(`:`);
      let currIndex = account.indexOf(currName);

      if (account.includes(currName)) {
        account.splice(currIndex + 1, 0, expansion);
      }
    }
  }
  console.log(account.join(` `));
}
tseamAccount([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
console.log(`---`);
tseamAccount([
  "CS WoW Diablo",
  "Uninstall XCOM",
  "Update PeshoGame",
  "Update WoW",
  "Expansion Civ-V",
  "Play!",
]);
