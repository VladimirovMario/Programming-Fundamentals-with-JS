function count(sentence, word) {
  let counter = 0;
  for (const iterator of sentence.split(` `)) {
    if (iterator === word) {
      counter++;
    }
  }
  return counter;
}
console.log(count("This is a word and it also is a sentence", "is"));
console.log(
  count(
    "softuni is great place for learning new programming languages",
    "softuni"
  )
);
