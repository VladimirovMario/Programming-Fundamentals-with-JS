function revealWords(text, sentence) {
  let words = text.split(", ");

  for (const currWord of words) {
    let template = `*`.repeat(currWord.length);
    sentence = sentence.replace(template, currWord);
  }
  console.log(sentence);
}
revealWords(
  "great",
  "softuni is ***** place for learning new programming languages"
);
revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
