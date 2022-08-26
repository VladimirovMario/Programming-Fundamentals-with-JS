function solve(input) {
    // initialize power multipliers
    let suits = {
        'C': 1,
        'D': 2,
        'H': 3,
        'S': 4
    };
    let faces = {
        '1': 10,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14,
    };
  
    // create result collection
    let players = {};
  
    // for every element of input
    for (let line of input) {
        // - parse element
        // -- split by ': ' -> name and cards as string
        // -- split cards string by ', ' -> array of cards
        let [name, cards] = line.split(': ');
        cards = cards.split(', ');
  
        // - store in collection
        // -- if person is not recorded, create new Set
        // -- add new cards to person's set
        if (players.hasOwnProperty(name) == false) {
            players[name] = new Set();
        }
  
        for (let card of cards) {
            players[name].add(card);
        }
    }
  
    // for every entry in result collection
    for (let [name, cards] of Object.entries(players)) {
        let power = 0;
  
        // - for every card in entry
        // -- calculate power
        for (let card of cards) {
            let facePower = faces[card[0]];
            let suitPower = suits[card.slice(-1)];
  
            power += facePower * suitPower;
        }
        // - print name and total power
        console.log(`${name}: ${power}`);
    }
  }
  
  solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
  ]);
  
  solve([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
  ]);