function emojiDetector(text) {
  let emojiPattern = /(::|\*\*)(?<emoji>[A-Z][a-z]{2,})\1/g;
  let thresholdPattern = /[0-9]/g;

  let emoji = emojiPattern.exec(text);

  let coolThresholdSum = 1;
  text[0]
    .match(thresholdPattern)
    .map(Number)
    .forEach((el) => (coolThresholdSum *= el));

  let countOfAllEmojis = 0;
  let result = [];

  while (emoji !== null) {
    countOfAllEmojis++;

    let currEmoji = emoji.groups.emoji;
    let coolOnes = emoji[0];

    let sum = 0;
    for (const currChar of currEmoji) {
      sum += currChar.charCodeAt();
    }

    if (sum >= coolThresholdSum) {
      result.push(coolOnes);
    }

    emoji = emojiPattern.exec(text);
  }

  console.log(`Cool threshold: ${coolThresholdSum}`);
  console.log(
    `${countOfAllEmojis} emojis found in the text. The cool ones are:`
  );
  for (const emoji of result) {
    console.log(emoji);
  }
}
emojiDetector([
  "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
]);
console.log(`---`);
emojiDetector([
  "5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"
]);
console.log(`---`);
emojiDetector([
  "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."
] );
