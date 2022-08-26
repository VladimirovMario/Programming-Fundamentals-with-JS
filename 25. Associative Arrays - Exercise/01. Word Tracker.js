function wordTracker(array) {
  let words = array.shift().split(` `);
  let tracker = {};

  for (const word of words) {
    tracker[word] = 0;
  }

  for (const currWord of array) {
    if (tracker.hasOwnProperty(currWord)) {
      tracker[currWord]++;
    }
  }
  Object.entries(tracker)
    .sort((a, b) => b[1] - a[1])
    .forEach((word) => console.log(word[0], `-`, word[1]));
}
wordTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurances",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
console.log(`---`);
wordTracker([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
