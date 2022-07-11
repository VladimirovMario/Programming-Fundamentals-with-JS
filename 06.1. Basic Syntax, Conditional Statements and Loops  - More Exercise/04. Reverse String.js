function reverseString(word) {
  let wordAsArray = word.split(``);
  let reversedArray = wordAsArray.reverse();
  let reversedWord = reversedArray.join(``);
  console.log(reversedWord);
}
reverseString(`Hello`);

