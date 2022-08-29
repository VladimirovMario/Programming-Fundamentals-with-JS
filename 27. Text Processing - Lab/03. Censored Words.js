function censoredWords(sentence, word) {
  1;
  // let symbol = `*`;
  // if (symbol !== word) {
  //   while (sentence.includes(word)) {
  //     sentence = sentence.replace(word, symbol.repeat(word.length));
  //   }
  //   console.log(sentence);
  // }
  2; //   let censored = sentence.split(word);
  //   let result = censored.join(`*`.repeat(word.length));
  //   console.log(result);

  3;
  let result = ``;
  for (let i = 0; i < word.length; i++) {
    result += `*`;
  }
  console.log(sentence.split(word).join(result));
}
censoredWords("A small sentence with small some words", "small");
censoredWords("Find the hidden word", "hidden");
