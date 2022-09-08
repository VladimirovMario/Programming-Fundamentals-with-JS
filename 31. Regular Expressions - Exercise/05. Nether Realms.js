function netherRealms(array) {
  let namePattern = /[^\s\,].+?[^\s\,]+/g;
  let healthPattern = /[^0-9\+\-\*\/\.]/g;
  let damagePattern = /(-?\d+(?:\.\d+)?)/g;

  let daemons = {};
  let name = namePattern.exec(array);

  while (name !== null) {
    let currName = name[0].match(healthPattern);

    let daemonName = name[0];

    let health = 0;
    for (let currChar of currName) {
      health += currChar.charCodeAt();
    }

    let numbersInName = daemonName.match(damagePattern);

    let damage = 0;
    if (numbersInName !== null) {
      for (let currDigit of numbersInName) {
        damage += +currDigit;
      }
    }
    if (daemonName.includes(`*`) || daemonName.includes(`/`)) {
      for (let mark of daemonName) {
        if (mark === `*`) {
          damage *= 2;
        } else if (mark === `/` && damage !== 0) {
          damage /= 2;
        }
      }
    }
    daemons[daemonName] = {
      health,
      damage,
    };

    name = namePattern.exec(array);
  }

  let sorted = Object.keys(daemons).sort((a, b) => a.localeCompare(b));

  for (let daemon of sorted) {
    console.log(
      `${daemon} - ${daemons[daemon].health} health, ${daemons[
        daemon
      ].damage.toFixed(2)} damage`
    );
  }
}
netherRealms(`M3ph-0.5s-0.5t0.0**`);
console.log(`---`);
netherRealms(`M3ph1st0**, Azazel`);
console.log(`---`);
netherRealms(`Gos/ho`);
