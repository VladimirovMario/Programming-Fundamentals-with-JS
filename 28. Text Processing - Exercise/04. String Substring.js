function stringSubstring(word, text) {
  let sentence = text.toLowerCase().split(` `);
  if (sentence.includes(word.toLowerCase())) {
    console.log(`${word}`);
  } else {
    console.log(`${word} not found!`);
  }
}
stringSubstring(
  "javascript",
  "JavaScript is the best programming language javascript"
);
stringSubstring("python", "JavaScript is the best programming language");
