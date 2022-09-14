function passwordReset(text) {
  let password = text.shift();

  let startPass = ``;

  while (text[0] !== "Done") {
    let tokens = text.shift().split(` `);
    let command = tokens[0];

    if (command === "TakeOdd") {
      for (let i = 0; i < password.length; i++) {
        if (i % 2 !== 0) {
          startPass = startPass.concat(password[i]);
        }
      }
      password = startPass;
      console.log(password);
    } else if (command === "Cut") {
      let index = +tokens[1];
      let length = +tokens[2];

      let partToRemove = password.substring(index, index + length);
      password = password.replace(partToRemove, ``);

      console.log(password);
    } else if (command === "Substitute") {
      let substring = tokens[1];
      let substitute = tokens[2];

      if (password.includes(substring)) {
        while (password.includes(substring)) {
          password = password.replace(substring, substitute);
        }
        console.log(password);
      } else {
        console.log("Nothing to replace!");
      }
    }
  }
  console.log(`Your password is: ${password}`);
}

passwordReset([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
console.log(`---`);
passwordReset([
  "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
  "TakeOdd",
  "Cut 18 2",
  "Substitute ! ***",
  "Substitute ? .!.",
  "Done",
]);
