function wordOccurrences(words) {
  let counter = {};

  for (let word of words) {
    let count = 0;

    if (counter.hasOwnProperty(word) === false) {
      counter[word] = 0;
    }

    count++;
    counter[word] += count;
  }
  let sorted = Object.entries(counter)
    .sort((a, b) => b[1] - a[1])

    for( let [word, times] of sorted){
      console.log(`${word} -> ${times} times`);
    }
    
}
wordOccurrences([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
console.log(`---`);
wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);
