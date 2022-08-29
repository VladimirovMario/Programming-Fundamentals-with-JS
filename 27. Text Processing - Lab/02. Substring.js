function substring(string, start, count) {
  let word = string.substring(start, count + start);
  console.log(word);
}
substring("ASentence", 1, 8);
substring("SkipWord", 4, 7);
