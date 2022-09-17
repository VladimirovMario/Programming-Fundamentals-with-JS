function passwordValidator(array) {
  let pass = array.shift();

  while (array[0] != "Complete") {
    let tokens = array.shift().split(` `);
    let command = tokens[0];

    if (command == "Make") {
      let upperOrLower = tokens[1];
      let index = +tokens[2];
      let letter = pass.slice(index, index + 1);

      if (upperOrLower == "Upper") {
        let replacement = letter.toUpperCase();
        pass = pass.replace(letter, replacement);

        console.log(pass);
      } else {
        let replacement = letter.toLowerCase();
        pass = pass.replace(letter, replacement);
        console.log(pass);
      }
    }
    if (command == "Insert") {
      let index = +tokens[1];
      let char = tokens[2];
      if (index >= 0 && index < pass.length) {
        let splitted = pass.split(``);
        splitted.splice(index, 0, char);
        pass = splitted.join(``);
        console.log(pass);
      }
    }
    if (command == "Replace") {
      let charToReplace = tokens[1];
      let value = +tokens[2];

      if (pass.includes(charToReplace)) {
        let numFromChar = charToReplace.charCodeAt();
        let result = numFromChar + value;
        let newChar = String.fromCharCode(result);
        pass = pass.split(charToReplace);
        pass = pass.join(newChar);

        console.log(pass);
      }
    }
    if (command == "Validation") {
      if (pass.length < 8) {
        console.log("Password must be at least 8 characters long!");
      }

      let checked = [];
      let countUpperCase = 0;
      let countLowerCase = 0;
      let countDigit = 0;

      for (let i = 0; i < pass.length; i++) {
        let currSymbol = pass[i].charCodeAt();
        if (
          (currSymbol >= 48 && currSymbol <= 57) ||
          (currSymbol >= 65 && currSymbol <= 90) ||
          (currSymbol >= 97 && currSymbol <= 122) ||
          currSymbol === 95
        ) {
          checked.push(String.fromCharCode(currSymbol));
        }
        if (currSymbol >= 65 && currSymbol <= 90) {
          countUpperCase++;
        }
        if (currSymbol >= 97 && currSymbol <= 122) {
          countLowerCase++;
        }
        if (currSymbol >= 65 && currSymbol <= 90) {
          countDigit++;
        }
      }

      if (checked.length !== pass.length) {
        console.log("Password must consist only of letters, digits and _!");
      }
      if (countUpperCase == 0) {
        console.log("Password must consist at least one uppercase letter!");
      }
      if (countLowerCase == 0) {
        console.log("Password must consist at least one lowercase letter!");
      }
      if (countDigit == 0) {
        console.log("Password must consist at least one digit!");
      }
    }
  }
}
passwordValidator([
  "invalidpassword*",
  "Add 2 p",
  "Replace i -50",
  "Replace * 10",
  "Make Upper 2",
  "Validation",
  "Complete",
]);

console.log(`---`);

passwordValidator([
  "123456789",
  "Insert 3 R",
  "Replace 5 15",
  "Validation",
  "Make Lower 3",
  "Complete",
]);
