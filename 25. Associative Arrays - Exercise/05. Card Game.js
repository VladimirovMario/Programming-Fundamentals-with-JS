function cardGame(array) {
  let suits = {
    C: 1,
    D: 2,
    H: 3,
    S: 4,
  };
  let faces = {
    1: 10,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };

  let player = {};
  for (const currPlayer of array) {
    let tokens = currPlayer.split(`: `);
    let nameOfPlayer = tokens[0];
    let cards = tokens[1].split(`, `);

    if (player.hasOwnProperty(nameOfPlayer) === false) {
      player[nameOfPlayer] = [];
    }

    let inDeck = player[nameOfPlayer];
    for (const card of cards) {
      if (inDeck.includes(card) === false) {
        inDeck.push(card);
      }
    }
  }

  for (const [name, cards] of Object.entries(player)) {
    let power = 0;

    for (const card of cards) {
      let facePower = faces[card[0]];

      let suitPower = suits[card.slice(-1)];

      power += facePower * suitPower;
    }

    console.log(`${name}: ${power}`);
  }
}
cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
console.log(`---`);
cardGame([
  "John: 2C, 4H, 9H, AS, QS",
  "Slav: 3H, 10S, JC, KD, 5S, 10S",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Slav: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "John: JD, JD, JD, JD",
]);
