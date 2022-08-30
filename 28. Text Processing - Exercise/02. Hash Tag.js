function hashTag(sentence) {
  let words = sentence.split(` `);

  for (const currWord of words) {
    if (currWord.startsWith(`#`) && currWord.length > 1) {
      let result = currWord.substring(1);

      function check(onlyLetters) {
        for (const word of onlyLetters) {
          let currChar = word.charCodeAt();

          if (
            (currChar >= 65 && currChar <= 90) ||
            (currChar >= 97 && currChar <= 122)
          ) {
          } else {
            return false;
          }
        }
        return true;
      }

      if (check(result)) {
        console.log(result);
      }
    }
  }
}
hashTag("Nowadays everyone uses # to tag a #special word in #socialMedia");
console.log(`---`);
hashTag(
  "The symbol # is known #variously in English-speaking #regions as the #number sign"
);
