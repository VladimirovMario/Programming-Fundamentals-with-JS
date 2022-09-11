function thePianist(array) {
  let list = array.shift();
  let favoriteList = {};
  for (let i = 0; i < list; i++) {
    let [piece, composer, key] = array.shift().split(`|`);
    favoriteList[piece] = { composer, key };
  }
  while (array[0] !== "Stop") {
    let tokens = array.shift().split(`|`);
    let [command, piece] = tokens;

    if (command == `Add`) {
      let composer = tokens[2];
      let key = tokens[3];
      if (favoriteList.hasOwnProperty(piece) == false) {
        favoriteList[piece] = { composer, key };
        console.log(
          `${piece} by ${composer} in ${key} added to the collection!`
        );
      } else {
        console.log(`${piece} is already in the collection!`);
      }
    }
    if (command == `Remove`) {
      if (favoriteList.hasOwnProperty(piece)) {
        delete favoriteList[piece];
        console.log(`Successfully removed ${piece}!`);
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }
    }
    if (command == `ChangeKey`) {
      let newKey = tokens[2];
      if (favoriteList.hasOwnProperty(piece)) {
        favoriteList[piece].key = newKey;
        console.log(`Changed the key of ${piece} to ${newKey}!`);
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }
    }
  }

  let entries = Object.entries(favoriteList);

  for (let [name, properties] of entries) {
    console.log(
      `${name} -> Composer: ${properties.composer}, Key: ${properties.key}`
    );
  }
}
/*
Решението е без сортирането накрая.
Upon receiving the "Stop" command, you need to print all pieces in your collection, 
sorted by their name and by the name of their composer in alphabetical order,
 in the following format:
"{Piece} -> Composer: {composer}, Key: {key}"
*/
thePianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",

  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
console.log(`---`);
thePianist([
  "4",
  "Eine kleine Nachtmusik|Mozart|G Major",
  "La Campanella|Liszt|G# Minor",
  "The Marriage of Figaro|Mozart|G Major",
  "Hungarian Dance No.5|Brahms|G Minor",
  "Add|Spring|Vivaldi|E Major",
  "Remove|The Marriage of Figaro",
  "Remove|Turkish March",
  "ChangeKey|Spring|C Major",
  "Add|Nocturne|Chopin|C# Minor",
  "Stop",
]);
