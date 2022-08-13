function deckOfCards(list) {
  let listOfCards = list.shift().split(`, `);
  let n = +list.shift();

  for (let i = 0; i < n; i++) {
    let tokens = list[i].split(`, `);
    let command = tokens[0];

    if (command == "Add") {
      let cardName = tokens[1];
      if (listOfCards.includes(cardName)) {
        console.log("Card is already in the deck");
      } else {
        listOfCards.push(cardName);
        console.log("Card successfully added");
      }
    }
    if (command == "Remove") {
      let cardName = tokens[1];
      let searchedIndex = listOfCards.indexOf(cardName);
      if (searchedIndex != -1) {
        listOfCards.splice(searchedIndex, 1);
        console.log("Card successfully removed");
      } else {
        console.log("Card not found");
      }
    }
    if (command == "Remove At") {
      let index = +tokens[1];
      if (index >= 0 && index < listOfCards.length) {
        listOfCards.splice(index, 1);
        console.log("Card successfully removed");
      } else {
        console.log("Index out of range");
      }
    }
    if (command == "Insert") {
      let index = +tokens[1];
      let cardName = tokens[2];

      if (index >= 0 && index < listOfCards.length) {
        if (listOfCards.includes(cardName)) {
          console.log("Card is already added");
        } else {
          listOfCards.splice(index, 0, cardName);
          console.log("Card successfully added");
        }
      } else {
        console.log("Index out of range");
      }
    }
  }
  console.log(listOfCards.join(`, `));
}
deckOfCards([
  "Ace of Diamonds, Queen of Hearts, King of Clubs",
  "3",
  "Add, King of Diamonds",
  "Insert, 2, Jack of Spades",
  "Remove, Ace of Diamonds",
]);

console.log(`---`);

deckOfCards([
  "Two of Clubs, King of Spades, Five of Spades, Jack of Hearts",
  "2",
  "Add, Two of Clubs",
  "Remove, Five of Hearts",
]);

console.log(`---`);

deckOfCards([
  "Jack of Spades, Ace of Clubs, Jack of Clubs",
  "2",
  "Insert, -1, Queen of Spades",
  "Remove At, 1",
]);
