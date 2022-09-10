function theImitationGame(array) {
  let message = array.shift().split(``);

  while (array[0] !== "Decode") {

    let command = array.shift().split("|");
    let currCommand = command[0];

    if (currCommand === "ChangeAll") {

      let lettersToChange = command[1];
      let replacement = command[2];
      let searchedIndex = message.indexOf(lettersToChange);

      while (searchedIndex !== -1) {
       
        message.splice(searchedIndex, 1, replacement);
        searchedIndex = message.indexOf(lettersToChange);
      }
    } else if (currCommand === "Insert") {

      let currIndex = Number(command[1]);
      let value = command[2];
      message.splice(currIndex, 0, value);

    } else if (currCommand === "Move") {

      let numOfLetters = Number(command[1]);
      let lettersToMove = message.join("");
      let firstPart = lettersToMove.substring(0, numOfLetters);
      let secondPart = lettersToMove.substring(numOfLetters);
      let wholeString = secondPart + firstPart;
      message = wholeString.split("");
      
    }
  }

  console.log(`The decrypted message is: ${message.join(``)}`);
}
theImitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
theImitationGame([
  "owyouh",
  "Move|2",
  "Move|3",
  "Insert|3|are",
  "Insert|9|?",
  "Decode",
]);
