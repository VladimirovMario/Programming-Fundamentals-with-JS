function asciiSumator(params) {
  const firstChar = params[0].charCodeAt();
  const secondChar = params[1].charCodeAt();

  let sum = 0;
  for (const element of params[2]) {
    const currDigit = element.charCodeAt();
    if (firstChar < secondChar) {
      if (firstChar < currDigit && secondChar > currDigit) {
        sum += currDigit;
      }
    } else {
      if (secondChar < currDigit && firstChar > currDigit) {
        sum += currDigit;
      }
    }
  }
  console.log(sum);
}
asciiSumator([".", "@", "dsg12gr5653feee5"]);
asciiSumator(["?", "E", "@ABCEF"]);
asciiSumator(["a", "1", "jfe392$#@j24ui9ne#@$"]);
