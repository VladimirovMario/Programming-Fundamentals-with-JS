function replaceRepeatingChars(sequence) {
  let result = [];
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] !== sequence[i + 1]) {
      result.push(sequence[i]);
    }
  }
  console.log(result.join(``));
}
replaceRepeatingChars("aaaaabbbbbcdddeeeedssaa");
replaceRepeatingChars("qqqwerqwecccwd");
