function chatLogger(array) {
  let chat = [];
  while (array[0] != "end") {
    let tokens = array.shift().split(` `);

    let command = tokens[0];
    let message = tokens[1];
    let editedVersion = tokens[2];

    let index = chat.indexOf(message);

    if (command == "Chat") {
      chat.push(message);
    }
    if (command == "Delete") {
      let index = chat.indexOf(message);

      if (index != -1) {
        chat.splice(index, 1);
      }
    }
    if (command == "Edit") {
      if (index != -1) {
        chat.splice(index, 1, editedVersion);
      }
    }
    if (command == "Pin") {
      if (index != -1) {
        let pinMessage = chat.splice(index, 1).join(``);
        chat.push(pinMessage);
      }
    }
    if (command == "Spam") {
      for (let i = 1; i < tokens.length; i++) {
        chat.push(tokens[i]);
      }
    }
  }
  console.log(chat.join(`\n`));
}
chatLogger([
  "Chat Hello",
  "Chat darling",
  "Edit darling Darling",
  "Spam how are you",
  "Delete Darling",
  "end",
]);

console.log(`---`);

chatLogger(["Chat Hello", "Delete John", "Pin Hi", "end"]);

console.log(`---`);

chatLogger([
  "Chat John",
  "Spam Let's go to the zoo",
  "Edit zoo cinema",
  "Chat tonight",
  "Pin John",
  "end",
]);
