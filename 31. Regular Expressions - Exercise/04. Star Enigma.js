function starEnigma(array) {
  // 80
  let numberOfMessages = array.shift();
  let starPattern = /[star]/g;
  let planetPattern =
    /@(?<name>[A-Za-z]*)[^@\-!:>]*:(?<population>\d*)[^@\-!:>]*!(?<attack>[A|D])![^@\-!:>]*->(?<soldier>\d+)/;

  let planets = [];
  for (let i = 0; i < numberOfMessages; i++) {
    let message = array[i].toLowerCase();
    let test = message.match(starPattern);
    let newMessage = array[i];
    if (test !== null) {
      let count = message.match(starPattern).length;
      for (let currSymbol of newMessage) {
        let currDigit = currSymbol.charCodeAt();
        let stringFromNum = String.fromCharCode((currDigit -= count));
        if (stringFromNum == `@`) {
          planets.push(` `, stringFromNum);
        } else {
          planets.push(stringFromNum);
        }
      }
    }
  }

  let currPlanet = planets.join(``).split(` `);

  let result = {};
  let attackedCount = 0;
  let destroyedCount = 0;

  for (let planet of currPlanet) {
    let match = planetPattern.exec(planet);
    if (match !== null) {
      let name = match[1];
      let attackType = match[3];
      result[name] = attackType;

      if (match[3] === `A`) {
        attackedCount++;
      } else {
        destroyedCount++;
      }
    }
  }
  let sorted = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]));

  console.log(`Attacked planets: ${attackedCount}`);
  for (let attacked of sorted) {
    if (attacked[1] === `A`) {
      console.log(`-> ${attacked[0]}`);
    }
  }
  console.log(`Destroyed planets: ${destroyedCount}`);
  for (let destroyed of sorted) {
    if (destroyed[1] === `D`) {
      console.log(`-> ${destroyed[0]}`);
    }
  }
}
starEnigma(["2", "STCDoghudd4=63333$D$0A53333", "EHfsytsnhf?8555&I&2C9555SR"]);
console.log(`---`);
starEnigma([
  "3",
  "tt(''DGsvywgerx>6444444444%H%1B9444",
  "GQhrr|A977777(H(TTTT",
  "EHfsytsnhf?8555&I&2C9555SR",
]);
