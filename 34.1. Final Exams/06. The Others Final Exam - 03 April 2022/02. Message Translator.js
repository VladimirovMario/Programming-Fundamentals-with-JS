function messageTranslator(input) {
  let pattern = /\!(?<command>[A-Z][a-z]{2,})\!:\[(?<str>[A-Za-z]{8,})\]/g
  let n = +input.shift();

  for (let i = 0; i < n; i++) {
    let isValid = pattern.exec(input[i]);
    

    let result = [];
    if (isValid !== null) {
      for (const char of isValid.groups.str) {
          result.push(char.charCodeAt());
      }
      console.log(`${isValid.groups.command}: ${result.join(` `)}`);
    } else {
      console.log("The message is invalid");
    }
  }
}
messageTranslator(["2", "!Send!:[IvanisHere]", "*Time@:[Itis5amAlready]"]);
