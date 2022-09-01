function hardWords(array) {
  let sentence = array[0].split(` `);
  let words = array[1];
  for (const iterator of words) {
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i].includes(`_`)) {
        if (sentence[i].endsWith(`_`) === false) {
          let word = sentence[i].substring(0, sentence[i].length - 1);
          let mark = sentence[i].substring(sentence[i].length - 1);
          if (iterator.length == word.length) {
            sentence[i] = iterator + mark;
          }
        } else if (iterator.length == sentence[i].length) {
          sentence[i] = iterator;
        }
      }
    }
  }
  console.log(sentence.join(` `));
}
hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);
