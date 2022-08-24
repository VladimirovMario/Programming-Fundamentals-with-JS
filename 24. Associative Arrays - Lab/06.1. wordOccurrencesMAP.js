function wordOccurrences(words) {
  let counter = new Map();

  for (let word of words) {
    let count = 0;

    if (counter.has(word) === false) {
      counter.set(word, count);
    }

    count++;
    let currCount = counter.get(word);
    let newCount = currCount + count;
    counter.set(word, newCount);
  }
  Array.from(counter)
    .sort((a, b) => b[1] - a[1])
    .forEach((word) => console.log(`${word[0]} -> ${word[1]} times`));
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
