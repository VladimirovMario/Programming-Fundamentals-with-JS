// https://pastebin.com/2b3j54tT
function mirrorWords(text) {
  let pattern = /(@|#)([A-Za-z]{3,})\1{2}([A-Za-z]{3,})\1/g;
  let pairs = pattern.exec(text);

  let count = 0;
  let result = [];

  while (pairs !== null) {

    if (pairs !== null) {
      count++;
      
      let firstWord = pairs[2];
      let secondWord = pairs[3];
      let wordToCompare = pairs[3].split(``).reverse().join(``);
      if (firstWord === wordToCompare) {
        result.push(` `, firstWord, ` <=> `, secondWord, `,`);
      }
    }
    pairs = pattern.exec(text);
  }

  if (count == 0) {
    console.log("No word pairs found!");
  } else if (count !== 0) {
    console.log(`${count} word pairs found!`);
  }

  if (result.length == 0) {
    console.log("No mirror words!");
  } else {
    console.log("The mirror words are:");
    let finalResult = result.join(``).trimStart();
    console.log(finalResult.substring(0, finalResult.length - 1));
  }
}
mirrorWords(
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r"
);
console.log(`---`);
mirrorWords("#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@");
console.log(`---`);
mirrorWords("#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#");
