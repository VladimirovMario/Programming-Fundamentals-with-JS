function rightPlace(firstWord, char, secondWord) {
  let result = ``;
  for (let i = 0; i < firstWord.length; i++) {
    let currentLetter = firstWord[i];

    if (currentLetter === `_`) {
      currentLetter = char;
    }
    result += currentLetter;
  }
  if (result === secondWord) {
    console.log(`Matched`);
  } else {
    console.log(`Not Matched`);
  }
}
rightPlace("Str_ng", "I", "Strong");
rightPlace("Str_ng", "i", "String");
