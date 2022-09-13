//https://pastebin.com/b06LAK7u
function secretChat(array) {
  let message = array.shift();

  while (array[0] !== "Reveal") {

    let tokens = array.shift().split(`:|:`);
    let command = tokens[0];

    if (command === "ChangeAll") {

      let lettersToChange = tokens[1];
      let replacement = tokens[2];

      while (message.includes(lettersToChange)) {
        message = message.replace(lettersToChange, replacement);
      }
      console.log(message);
    } else if (command === "Reverse") {

      let givenSubstr = tokens[1];
      if (message.includes(givenSubstr)) {

        let index = message.indexOf(givenSubstr);
        let end = index + givenSubstr.length; 
        let second = message.substring(index, end);
        let reversed = second.split(``).reverse().join(``);
        let first = message.substring(0, index);
        let thirdPart = message.substring(index + givenSubstr.length);
        message = first + thirdPart + reversed;
        console.log(message);

      } else {
        console.log(`error`);
      }
    } else if (command === "InsertSpace") {
      
      let searchedIndex = +tokens[1];
      let firstPart = message.substring(0, searchedIndex);
      let secondPart = message.substring(searchedIndex);
      console.log((message = firstPart + ` ` + secondPart));
    }
  }
  console.log(`You have a new text message: ${message}`);
}

secretChat([
  "heVVodar!gniV#",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
console.log(`---`);
secretChat([
  "Hiware?uiy",
  "ChangeAll:|:i:|:o",
  "Reverse:|:?uoy",
  "Reverse:|:jd",
  "InsertSpace:|:3",
  "InsertSpace:|:7",
  "Reveal",
]);
